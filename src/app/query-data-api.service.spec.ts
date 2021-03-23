import { TestBed } from '@angular/core/testing';

import { QueryDataApiService } from './query-data-api.service';

describe('QueryDataApiService', () => {
  let service: QueryDataApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryDataApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
