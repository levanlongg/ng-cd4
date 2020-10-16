import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyCardsComponent } from './loyalty-cards.component';

describe('LoyaltyCardsComponent', () => {
  let component: LoyaltyCardsComponent;
  let fixture: ComponentFixture<LoyaltyCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoyaltyCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyaltyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
