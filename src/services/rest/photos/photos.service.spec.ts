/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import PhotosService from './photos.service';

describe('Service: Photos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotosService],
      imports: [HttpClientTestingModule],
    });
  });

  it('should ...', inject([PhotosService], (service: PhotosService) => {
    expect(service).toBeTruthy();
  }));
});
