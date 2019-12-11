import { TestBed } from '@angular/core/testing';

import { WoodpressService } from './woodpress.service';

describe('WoodpressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WoodpressService = TestBed.get(WoodpressService);
    expect(service).toBeTruthy();
  });
});
