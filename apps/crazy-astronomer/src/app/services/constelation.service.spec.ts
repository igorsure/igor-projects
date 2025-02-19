import { TestBed } from '@angular/core/testing';
import { ConstelationService } from './constelation.service';



describe('ConstelationServiceService', () => {
  let service: ConstelationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstelationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
