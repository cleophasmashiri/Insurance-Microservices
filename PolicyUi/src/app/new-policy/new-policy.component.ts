import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { InsurancePolicy } from '../shared/models/insurance-policy';
import { InsurancePolicyService } from '../shared/services/insurance-policy.service';

@Component({
  selector: 'app-new-policy',
  templateUrl: './new-policy.component.html',
  styleUrls: ['./new-policy.component.css']
})
export class NewPolicyComponent implements OnInit {

  newPolicyForm: FormGroup;
  submitted: boolean = false;
  policy: InsurancePolicy;
  constructor(private fb: FormBuilder, private service: InsurancePolicyService) { }

  ngOnInit() {
    this.policy = new InsurancePolicy();
    this.newPolicyForm = this.fb.group({
      name: [this.policy.name, Validators.required],
      email: [this.policy.email, Validators.required],
      dob: [this.policy.dob, Validators.required],
      gender: [this.policy.gender, Validators.required],
      carMake: [this.policy.carMake, Validators.required],
      carPrice: [this.policy.carPrice, Validators.required]
    });
  }
  onSubmit(form: FormGroup) {
    this.submitted = true;
    this.service.createPolicy(form.value)
      .subscribe(res => { console.log(  )},
        err => { console.log(err) });
  }

}
