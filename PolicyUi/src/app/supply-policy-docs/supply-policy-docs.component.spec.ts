import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyPolicyDocsComponent } from './supply-policy-docs.component';

describe('SupplyPolicyDocsComponent', () => {
  let component: SupplyPolicyDocsComponent;
  let fixture: ComponentFixture<SupplyPolicyDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyPolicyDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyPolicyDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
