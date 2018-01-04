import { TestBed, inject } from '@angular/core/testing';

import { TmdbServiceService } from './tmdb-service.service';

describe('TmdbServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TmdbServiceService]
    });
  });

  it('should be created', inject([TmdbServiceService], (service: TmdbServiceService) => {
    expect(service).toBeTruthy();
  }));
});
