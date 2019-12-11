import { TestBed } from '@angular/core/testing';

import { WooserviceService } from './wooservice.service';

describe('WooserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WooserviceService = TestBed.get(WooserviceService);
    expect(service).toBeTruthy();
  });
});
