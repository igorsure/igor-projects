import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstellationMapComponent } from './constellation-map.component';

describe('ConstellationMapComponent', () => {
  let component: ConstellationMapComponent;
  let fixture: ComponentFixture<ConstellationMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstellationMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstellationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
