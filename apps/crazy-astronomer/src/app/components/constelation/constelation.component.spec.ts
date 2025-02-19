import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstelationComponent } from './constelation.component';

describe('ConstelationComponent', () => {
  let component: ConstelationComponent;
  let fixture: ComponentFixture<ConstelationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstelationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
