import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstellationListComponent } from './constellation-list.component';

describe('ConstellationListComponent', () => {
  let component: ConstellationListComponent;
  let fixture: ComponentFixture<ConstellationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstellationListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstellationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
