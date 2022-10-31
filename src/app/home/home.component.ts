import { Component } from '@angular/core';
import PhotosService from 'src/services/rest/photos/photos.service';
import { Photo } from './photo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export default class HomeComponent {
  photo!: Photo;

  constructor(private photosService: PhotosService) {}

  changeUser(id_user: string) {
    this.photosService.getPhoto(Number(id_user)).subscribe((response) => {
      this.photo = response;
    });
  }
}
