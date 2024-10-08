import { TestBed } from '@angular/core/testing';

import { AboutProService } from './about-pro.service';

describe('AboutProService', () => {
  let service: AboutProService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutProService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
