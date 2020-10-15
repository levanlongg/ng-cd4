import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisCusTutorialComponent } from './regis-cus-tutorial.component';

describe('RegisCusTutorialComponent', () => {
  let component: RegisCusTutorialComponent;
  let fixture: ComponentFixture<RegisCusTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisCusTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisCusTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
