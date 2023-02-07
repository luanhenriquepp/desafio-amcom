import { TestBed } from '@angular/core/testing';

import { CooperativeAdmissionService } from './cooperative-admission.service';

describe('CooperativeAdmissionService', () => {
  let service: CooperativeAdmissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CooperativeAdmissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
