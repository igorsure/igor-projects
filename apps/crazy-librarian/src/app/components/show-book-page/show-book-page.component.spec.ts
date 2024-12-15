import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBookPageComponent } from './show-book-page.component';

describe('ShowBookPageComponent', () => {
  let component: ShowBookPageComponent;
  let fixture: ComponentFixture<ShowBookPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowBookPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
