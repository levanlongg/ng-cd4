import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcculativePointsComponent } from './acculative-points.component';

describe('AcculativePointsComponent', () => {
  let component: AcculativePointsComponent;
  let fixture: ComponentFixture<AcculativePointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcculativePointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcculativePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
