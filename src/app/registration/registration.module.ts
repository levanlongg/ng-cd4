import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
  }, 
];

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class RegistrationModule { }
