import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { CustomersComponent } from './customers/customers.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ApiInterceptor } from './shared/api-interceptor';
import { AuthComponent } from './auth/auth.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { LoadingIndicatorInterceptor } from './shared/loading-indicator-interceptor';
import { AuthGuard } from './auth/auth-guard';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    NewCustomerComponent,
    EditCustomerComponent,
    AuthComponent,
    ViewCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: LoadingIndicatorInterceptor, multi: true } ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
