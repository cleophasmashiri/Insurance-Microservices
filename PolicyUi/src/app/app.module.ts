import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPolicyComponent } from './new-policy/new-policy.component';
import { HttpClientModule } from '@angular/common/http'
import { from } from 'rxjs';
import { AdjudicatePolicyComponent } from './adjudicate-policy/adjudicate-policy.component';
import { SupplyPolicyDocsComponent } from './supply-policy-docs/supply-policy-docs.component';
import { AccelerateAdjudicatePolicyComponent } from './accelerate-adjudicate-policy/accelerate-adjudicate-policy.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPolicyComponent,
    AdjudicatePolicyComponent,
    SupplyPolicyDocsComponent,
    AccelerateAdjudicatePolicyComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
