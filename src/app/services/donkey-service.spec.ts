import { TestBed } from '@angular/core/testing';
import { DonkeyService } from './donkey-service';

describe('DonkeyService', () => {
  let service: DonkeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonkeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
