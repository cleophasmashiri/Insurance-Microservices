import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { CustomerService } from '../shared/services/customer.service';
import { Customer } from '../shared/models/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  newForm: FormGroup;
  submitted: boolean = false;
  customer: Customer;
  policy: any;
  constructor(private router: Router, private fb: FormBuilder, private service: CustomerService) { }

  ngOnInit() {
    this.customer = new Customer();
    this.newForm = this.fb.group({
      firstname: [this.customer.firstname, Validators.required],
      lastname: [this.customer.lastname, Validators.required],
      email: [this.customer.email, Validators.required],
      phoneNumber: [this.customer.phoneNumber, Validators.required],
      birthday: [this.customer.birthday, Validators.required],
      gender: [this.customer.gender, Validators.required],
      streetAddress: [this.customer.streetAddress, Validators.required],
      city: [this.customer.city, Validators.required],
      postalCode: [this.customer.postalCode, Validators.required]
    });
  }
  onSubmit(form: FormGroup) {
    console.log(form)
    this.submitted = true;
    if(form.status==='INVALID'){
      return;
    }
    this.service.create(form.value)
      .subscribe(res => { this.router.navigate(['home']);},
        err => { console.log(err) });
  }
}