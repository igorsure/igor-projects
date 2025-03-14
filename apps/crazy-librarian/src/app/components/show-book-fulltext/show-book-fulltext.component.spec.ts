import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBookFulltextComponent } from './show-book-fulltext.component';

describe('ShowBookFulltextComponent', () => {
  let component: ShowBookFulltextComponent;
  let fixture: ComponentFixture<ShowBookFulltextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowBookFulltextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowBookFulltextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
