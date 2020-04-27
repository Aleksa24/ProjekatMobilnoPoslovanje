import { TestBed } from '@angular/core/testing';

import { KorpaService } from './korpa.service';

describe('KorpaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KorpaService = TestBed.get(KorpaService);
    expect(service).toBeTruthy();
  });
});
