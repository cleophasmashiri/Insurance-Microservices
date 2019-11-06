import { Injectable } from '@angular/core';;
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 baseUrl = environment.BASE_URL;
  constructor(private http: HttpClient) { }
  get(id: string): Observable<Customer> {
    return this.http.get<Customer>(this.baseUrl + '/' + id);
  }
  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl);
  }
  create(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.baseUrl, customer);
  }
  update(customerId: number,  customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.baseUrl}/${customerId}`, customer);
  }
}