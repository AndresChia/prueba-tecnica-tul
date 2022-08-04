import { Component, OnInit } from '@angular/core';
import { gql } from 'apollo-angular';

@Component({
  selector: 'app-rickAndMorty',
  templateUrl: './rickAndMorty.component.html',
  styleUrls: ['./rickAndMorty.component.css'],
})
export default class RickAndMortyComponent implements OnInit {
  apollo: any;

  constructor() {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          {
            characters(page: 2, filter: { name: "Morty" }) {
              info {
                count
              }
              results {
                name
              }
            }
            location(id: 1) {
              id
            }
            episodesByIds(ids: [1, 2]) {
              id
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        debugger;
      });
  }
}
