import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: ServiceComponent,
  }, 
];

@NgModule({
  declarations: [ServiceComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class ServiceModule { }
