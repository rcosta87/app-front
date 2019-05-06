import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsBookComponent } from './reviews-book.component';

describe('ReviewsBookComponent', () => {
  let component: ReviewsBookComponent;
  let fixture: ComponentFixture<ReviewsBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
