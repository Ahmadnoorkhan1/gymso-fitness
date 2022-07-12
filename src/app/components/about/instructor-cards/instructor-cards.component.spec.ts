import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorCardsComponent } from './instructor-cards.component';

describe('InstructorCardsComponent', () => {
  let component: InstructorCardsComponent;
  let fixture: ComponentFixture<InstructorCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
