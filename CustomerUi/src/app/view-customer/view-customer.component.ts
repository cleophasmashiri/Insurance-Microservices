import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../shared/models/customer';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../shared/services/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent  implements OnInit {
  newForm: FormGroup;
  submitted: boolean = false;
  customer: Customer;
  policy: any;
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private service: CustomerService) { }

  ngOnInit() {
    let customerId = '';
    this.route.params.subscribe(params => customerId = params['customerId']);
    this.service.get(customerId)
      .subscribe(customer => {
        this.customer = customer;
      },
        err => { console.log(err) });

  }
  onShowPolicy() {
    
  }
}
