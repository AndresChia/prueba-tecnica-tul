import { Component, OnInit } from '@angular/core';
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

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loading = true;
    this.apiService.getPhotos().subscribe((response) => {
      this.loading = false;
      this.photos = response;
    });
  }

  getFilterTitle() {
    if (this.filterTitle.length === 0) {
      return this.photos;
    }

    return this.photos.filter((element) =>
      element.title.includes(this.filterTitle)
    );
  }

  photoById(_index: number, photo: Photo) {
    return photo.id;
  }

  changeSelect(option: any) {
    document.getElementById(option.id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
