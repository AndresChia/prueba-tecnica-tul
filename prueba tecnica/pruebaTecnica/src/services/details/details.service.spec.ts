/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { DetailsService } from './details.service';

describe('Service: Details', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailsService],
      imports: [HttpClientTestingModule],
    });
  });

  it('should ...', inject([DetailsService], (service: DetailsService) => {
    expect(service).toBeTruthy();
  }));
});
