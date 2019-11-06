import { TestBed } from '@angular/core/testing';

import { InsurancePolicyService } from './insurance-policy.service';

describe('InsurancePolicyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsurancePolicyService = TestBed.get(InsurancePolicyService);
    expect(service).toBeTruthy();
  });
});
