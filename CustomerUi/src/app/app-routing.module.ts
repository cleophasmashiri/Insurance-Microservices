import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { CustomersComponent } from './customers/customers.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth-guard';

const routes: Routes = [{
  component: CustomersComponent, canActivate: [AuthGuard],
  path: '',pathMatch: 'full' 
},{
  component: CustomersComponent, canActivate: [AuthGuard],
  path: 'home'
}, {
  component: NewCustomerComponent,
  path: 'new', canActivate: [AuthGuard]
}, {
  component: EditCustomerComponent, canActivate: [AuthGuard],
  path: 'edit/:customerId'
}, {
  component: ViewCustomerComponent, canActivate: [AuthGuard],
  path: 'view/:customerId'
}, {
  component: AuthComponent,
  path: 'auth'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
