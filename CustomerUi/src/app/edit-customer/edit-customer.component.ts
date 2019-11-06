import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Customer } from '../shared/models/customer';
import { CustomerService } from '../shared/services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  newForm: FormGroup;
  submitted: boolean = false;
  customer: Customer;
  policy: any;
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private service: CustomerService) { }

  ngOnInit() {
    this.customer = new Customer();
    this.initialise();
    let customerId = '';
    this.route.params.subscribe(params => customerId = params['customerId']);
    this.service.get(customerId)
      .subscribe(customer => {
        console.log(customer);
        this.customer = customer;
        this.initialise();
      },
        err => { console.log(err) });

  }
  onSubmit(form: FormGroup) {
    this.submitted = true;
    this.service.update(this.customer.id, form.value)
      .subscribe(res => {  this.router.navigate(['']); },
        err => { Swal.fire('Oops...', 'Something went wrong!', 'error');});
  }
  initialise() {
    this.newForm = this.fb.group({
    firstname: [this.customer.firstname, Validators.required],
    lastname: [this.customer.lastname, Validators.required],
    email: [this.customer.email, Validators.required],
    phoneNumber: [this.customer.phoneNumber, Validators.required],
    birthday: [new Date(this.customer.birthday), Validators.required],
    gender: [this.customer.gender, Validators.required],
    streetAddress: [this.customer.streetAddress, Validators.required],
    city: [this.customer.city, Validators.required],
    postalCode: [this.customer.postalCode, Validators.required]
  });

  }
}
