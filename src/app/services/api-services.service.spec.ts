import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { ApiServicesService } from './api-services.service';

describe('ApiServicesService', () => {
  let service: ApiServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    
    service = TestBed.inject(ApiServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
