import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
  }, 
];

@NgModule({
  declarations: [NewsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class NewsModule { }
