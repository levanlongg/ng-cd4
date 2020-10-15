import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisCusTutorialComponent } from './regis-cus-tutorial.component'
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: RegisCusTutorialComponent,
  }, 
];

@NgModule({
  declarations: [RegisCusTutorialComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class RegisCusTutorialModule { }
