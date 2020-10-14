import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IntroduceComponent} from './introduce.component'
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: IntroduceComponent,
  }, 
];

@NgModule({
  declarations: [IntroduceComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class IntroduceModule { }
