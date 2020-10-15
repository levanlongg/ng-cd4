import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoyalCustomerComponent } from './royal-customer.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: RoyalCustomerComponent,
  }, 
];

@NgModule({
  declarations: [RoyalCustomerComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class RoyalCustomerModule { }
