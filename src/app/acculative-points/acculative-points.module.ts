import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcculativePointsComponent } from './acculative-points.component'
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: AcculativePointsComponent,
  }, 
];

@NgModule({
  declarations: [AcculativePointsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class AcculativePointsModule { }
