import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionComponent } from './promotion.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: PromotionComponent,
  }, 
];

@NgModule({
  declarations: [PromotionComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class PromotionModule { }
