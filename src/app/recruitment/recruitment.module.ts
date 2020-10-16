import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruitmentComponent } from './recruitment.component'
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: RecruitmentComponent,
  }, 
];

@NgModule({
  declarations: [RecruitmentComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class RecruitmentModule { }
