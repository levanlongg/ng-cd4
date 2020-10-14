import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyalCustomerComponent } from './royal-customer.component';

describe('RoyalCustomerComponent', () => {
  let component: RoyalCustomerComponent;
  let fixture: ComponentFixture<RoyalCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoyalCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyalCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
