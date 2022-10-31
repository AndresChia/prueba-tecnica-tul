/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { Apollo } from 'apollo-angular';
import UsersService from './users.service';

describe('Service: Users', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService, Apollo],
    });
  });

  it('should ...', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});
