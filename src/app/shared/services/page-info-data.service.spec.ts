import { TestBed } from '@angular/core/testing';

import { PageInfoDataService } from './page-info-data.service';

describe('PageTitleDataService', () => {
  let service: PageInfoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageInfoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
