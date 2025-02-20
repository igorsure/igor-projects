import { TestBed } from '@angular/core/testing';
import { ConstellationService } from './constellation.service';



describe('ConstellationServiceService', () => {
  let service: ConstellationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstellationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
