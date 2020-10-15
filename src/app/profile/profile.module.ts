import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component'
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  }, 
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class ProfileModule { }
