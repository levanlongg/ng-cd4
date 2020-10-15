import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchboardComponent } from './switchboard.component'
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: SwitchboardComponent,
  }, 
];

@NgModule({
  declarations: [SwitchboardComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class SwitchboardModule { }
