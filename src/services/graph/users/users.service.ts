import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export default class UsersService {
  constructor(private apollo: Apollo) {}

  getUsers(page: number = 1, filter: string = '{}') {
    // se debe tomar todos los usuarios el id y el nombre para mostrarlos en el select
    return this.apollo.watchQuery<any>({
      query: gql`
        query {
          allUsers(page: 0, perPage: 50) {
            id
            name
          }
        }
      `,
    }).valueChanges;
  }

  getUser() {}
}
