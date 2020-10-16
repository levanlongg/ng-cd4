import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoyaltyCardsComponent } from './loyalty-cards.component'
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LoyaltyCardsComponent,
  }, 
];

@NgModule({
  declarations: [LoyaltyCardsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class LoyaltyCardsModule { }
