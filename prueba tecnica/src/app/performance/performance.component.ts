import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import ApiService from 'src/services/api/api.service';
import { Photo } from './photo';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss'],
})
export default class PerformanceComponent implements OnInit {
  photos!: Array<Photo>;

  filterTitle: string = '';

  selectTitle: string = '';

  loading: boolean = false;

  todo = new Subject<Array<Photo>>();

  timeout = setTimeout(() => {}, 1000);

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loading = true;
    this.apiService.getPhotos().subscribe((response) => {
      this.photos = response;
      this.todo.next(response);
      this.loading = false;
    });
  }

  photoById(_index: number, photo: Photo) {
    return photo.id;
  }

  changeTitle(_option: any) {
    this.loading = true;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      if (this.filterTitle.length === 0) {
        this.todo.next(this.photos);
      }

      this.todo.next(
        this.photos.filter((element) =>
          element.title.includes(this.filterTitle)
        )
      );

      this.loading = false;
    }, 500);
  }

  changeSelect(option: any) {
    document.getElementById(option.id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
