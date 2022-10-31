import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import environment from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export default class PhotosService {
  constructor(private httpClient: HttpClient) {}

  getPhotos(): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(
      `${environment.API_REST_URL}/photos`
    );
  }

  getPhoto(id: number): Observable<any> {
    return this.httpClient.get<any>(`${environment.API_REST_URL}/photos/${id}`);
  }
}
