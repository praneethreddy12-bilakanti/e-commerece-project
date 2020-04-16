import { TestBed } from '@angular/core/testing';

import { DressesService } from './dresses.service';

describe('DressesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DressesService = TestBed.get(DressesService);
    expect(service).toBeTruthy();
  });
});
