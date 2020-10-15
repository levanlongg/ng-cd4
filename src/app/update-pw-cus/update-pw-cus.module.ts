import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatePwCusComponent } from './update-pw-cus.component'
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: UpdatePwCusComponent,
  }, 
];

@NgModule({
  declarations: [UpdatePwCusComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class UpdatePwCusModule { }
