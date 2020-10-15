import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePwCusComponent } from './update-pw-cus.component';

describe('UpdatePwCusComponent', () => {
  let component: UpdatePwCusComponent;
  let fixture: ComponentFixture<UpdatePwCusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePwCusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePwCusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
