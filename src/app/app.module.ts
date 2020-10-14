import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { Er404Component } from './shared/er404/er404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RoyalCustomerComponent } from './royal-customer/royal-customer.component';
import { RulesComponent } from './rules/rules.component';
import { AcculativePointsComponent } from './acculative-points/acculative-points.component';
import { HomeModule} from './home/home.module';
import { SharedModule} from './shared/shared.module';
import { ServiceModule} from './service/service.module';
import { IntroduceModule } from './introduce/introduce.module';
import { ContactModule } from './contact/contact.module';



const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)  
  },
  {
    path: 'service',
    loadChildren: () => import('./service/service.module').then(m => m.ServiceModule)  
  },
  {
    path: 'introduce',
    loadChildren: () => import('./introduce/introduce.module').then(m => m.IntroduceModule)  
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)  
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: '**', component:Er404Component}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    FooterComponent,
    Er404Component,
    RoyalCustomerComponent,
    RulesComponent,
    AcculativePointsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    SharedModule,
    ServiceModule,
    IntroduceModule,
    ContactModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
