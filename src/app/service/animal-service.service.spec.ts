import { TestBed } from '@angular/core/testing';

import { AnimalService } from './animal-service.service';

describe('TeamServiceService', () => {
  let service: AnimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
