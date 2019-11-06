import { Injectable } from '@angular/core';;
import { InsurancePolicy } from '../models/insurance-policy';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InsurancePolicyService {
 baseUrl = environment.POLICY_BASE_URL;
 aProcessDefinitionKey = environment.aProcessDefinitionKey;

  constructor(private http: HttpClient) { }

  createPolicy(policy: InsurancePolicy): Observable<InsurancePolicy> {
    return this.http.post<InsurancePolicy>(this.baseUrl + '/process-definition/key/' + this.aProcessDefinitionKey + '/start', this.convertPolicyToMap(policy));
  }  //

  convertPolicyToMap(policy: InsurancePolicy): any {
    let map = { variables: {} };
    map.variables['name'] = {value:policy.name, type: 'String'};
    map.variables['email'] = {value:policy.email, type: 'String'};;
    map.variables['dob'] = {value:policy.dob, type: 'Date'};
    map.variables['gender'] = {value:policy.gender, type: 'String'};;
    map.variables['carMake'] = {value:policy.carMake, type: 'String'};
    map.variables['carPrice'] = {value:policy.carPrice, type: 'Double'};
    return map;
  }
}