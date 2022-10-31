import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/home/photo';
import environment from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export default class PhotosService {
  constructor(private httpClient: HttpClient) {}

  getPhotos(): Observable<Array<Photo>> {
    return this.httpClient.get<Array<Photo>>(
      `${environment.API_REST_URL}/photos`
    );
  }

  getPhoto(id: number): Observable<Photo> {
    return this.httpClient.get<Photo>(
      `${environment.API_REST_URL}/photos/${id}`
    );
  }
}
