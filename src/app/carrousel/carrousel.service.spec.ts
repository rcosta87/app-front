import { TestBed } from '@angular/core/testing';

import { CarrouselService } from './carrousel.service';

describe('CarrouselService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarrouselService = TestBed.get(CarrouselService);
    expect(service).toBeTruthy();
  });
});
