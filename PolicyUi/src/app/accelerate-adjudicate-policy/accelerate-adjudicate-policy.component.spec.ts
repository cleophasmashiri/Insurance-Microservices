import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccelerateAdjudicatePolicyComponent } from './accelerate-adjudicate-policy.component';

describe('AccelerateAdjudicatePolicyComponent', () => {
  let component: AccelerateAdjudicatePolicyComponent;
  let fixture: ComponentFixture<AccelerateAdjudicatePolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccelerateAdjudicatePolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccelerateAdjudicatePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
