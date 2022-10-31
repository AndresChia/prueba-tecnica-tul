/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import MenusService from './menus.service';

describe('Service: Menus', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenusService],
      imports: [HttpClientTestingModule],
    });
  });

  it('should ...', inject([MenusService], (service: MenusService) => {
    expect(service).toBeTruthy();
  }));
});
