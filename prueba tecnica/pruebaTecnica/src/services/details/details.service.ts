import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Detail } from 'src/app/details/detail';

@Injectable({
  providedIn: 'root',
})
export default class DetailsService {
  constructor(private httpClient: HttpClient) {}

  getDetail(id: number): Observable<Detail> {
    return this.httpClient.get<Detail>(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
  }

  getImage(id: number): Observable<any> {
    return this.httpClient.get<any>(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
  }
}
