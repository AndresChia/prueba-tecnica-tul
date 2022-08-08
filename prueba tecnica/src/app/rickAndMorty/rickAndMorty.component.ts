import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import {
  FilterGraph,
  GraphCharacters,
  InfoCharacter,
  ResultCharacter,
} from './characters';

@Component({
  selector: 'app-rickAndMorty',
  templateUrl: './rickAndMorty.component.html',
  styleUrls: ['./rickAndMorty.component.scss'],
})
export default class RickAndMortyComponent implements OnInit {
  characters!: Array<ResultCharacter>;

  info!: InfoCharacter;

  loading: boolean = false;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.getData();
  }

  getData(page: number = 1, filter: string = '{}') {
    this.loading = true;
    this.apollo
      .watchQuery<GraphCharacters>({
        query: gql`
          {
            characters(page: ${page}, filter: ${filter}) {
              info {
                count
                pages
                next
                prev
              }
              results {
                name
                image
              }
            }
          }
        `,
      })
      .valueChanges.subscribe(({ data: { characters } }) => {
        this.loading = false;
        this.characters = characters.results;
        this.info = characters.info;
      });
  }

  nextPage() {
    this.getData(this.info.next);
  }

  prevPage() {
    this.getData(this.info.prev);
  }
}
