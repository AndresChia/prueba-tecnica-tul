import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from 'src/app/performance/photo';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export default class ApiService {
  constructor(private httpClient: HttpClient) {}

  getPhotos(): Observable<Array<Photo>> {
    return this.httpClient.get<Array<Photo>>(
      'https://jsonplaceholder.typicode.com/photos'
    );
  }
}
