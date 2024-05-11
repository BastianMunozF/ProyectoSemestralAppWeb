import { TestBed } from '@angular/core/testing';

import { ApiFlowService } from './api-flow.service';

describe('ApiFlowService', () => {
  let service: ApiFlowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFlowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
