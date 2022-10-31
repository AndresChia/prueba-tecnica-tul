import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export default class UsersService {
  constructor(private apollo: Apollo) {}

  getUsers(page: number = 0, perPage: number = 50) {
    // se debe tomar todos los usuarios el id y el nombre para mostrarlos en el select
    return this.apollo.watchQuery<any>({
      query: gql``,
    }).valueChanges;
  }

  getUser() {}
}
