import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstelationListComponent } from './constelation-list.component';

describe('ConstelationListComponent', () => {
  let component: ConstelationListComponent;
  let fixture: ComponentFixture<ConstelationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstelationListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstelationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
