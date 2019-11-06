import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/services/customer.service';
import { Customer } from '../shared/models/customer';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  loading = false;
  customers: Customer[];

  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(cs => {this.customers = cs},
        err => {
          Swal.fire('Oops...', 'Something went wrong!', 'error');
          this.loading = false;
        });
  }
}


