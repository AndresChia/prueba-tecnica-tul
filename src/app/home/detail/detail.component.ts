import { Component, Input } from '@angular/core';
import MenusService from 'src/services/rest/menus/menus.service';
import PhotosService from 'src/services/rest/photos/photos.service';
import { Photo } from '../photo';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export default class DetailComponent {
  @Input()
  set photo(photo: Photo) {
    if (photo?.id) {
      this.getMenus();
      this.getPhoto(photo.id);
    }
  }

  detail!: any;

  menus!: any;

  constructor(
    private photosService: PhotosService,
    private menusService: MenusService
  ) {}

  getPhoto(id: number) {
    this.photosService.getPhoto(id).subscribe((photo) => {
      this.detail = photo;
    });
  }

  getMenus() {
    this.menusService.getMenus().subscribe((menus) => {
      this.menus = menus;
    });
  }
}
