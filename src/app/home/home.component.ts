import { Component } from '@angular/core';
import PhotosService from 'src/services/rest/photos/photos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export default class HomeComponent {
  photo: any;

  constructor(private photosService: PhotosService) {}

  changeUser(id_user: any) {
    this.photosService.getPhoto(Number(id_user)).subscribe((response) => {
      this.photo = response;
    });
  }
}
