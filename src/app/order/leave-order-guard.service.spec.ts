import { TestBed } from '@angular/core/testing';

import { LeaveOrderGuardService } from './leave-order-guard.service';

describe('LeaveOrderGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeaveOrderGuardService = TestBed.get(LeaveOrderGuardService);
    expect(service).toBeTruthy();
  });
});
