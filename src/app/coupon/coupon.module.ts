import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponComponent } from './coupon.component'
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: CouponComponent,
  }, 
];

@NgModule({
  declarations: [CouponComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class CouponModule { }
