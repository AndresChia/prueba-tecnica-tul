import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import environment from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export default class MenusService {
  constructor(private httpClient: HttpClient) {}

  getMenus(): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(`${environment.API_REST_URL}/menus`);
  }
}
