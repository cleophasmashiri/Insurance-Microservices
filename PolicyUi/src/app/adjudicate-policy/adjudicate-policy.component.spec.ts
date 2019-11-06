import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjudicatePolicyComponent } from './adjudicate-policy.component';

describe('AdjudicatePolicyComponent', () => {
  let component: AdjudicatePolicyComponent;
  let fixture: ComponentFixture<AdjudicatePolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjudicatePolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjudicatePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
