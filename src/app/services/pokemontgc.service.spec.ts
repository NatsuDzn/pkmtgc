import { TestBed } from '@angular/core/testing';

import { PokemontgcService } from './pokemontgc.service';

describe('PokemontgcService', () => {
  let service: PokemontgcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemontgcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
