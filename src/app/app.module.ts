import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { Er404Component } from './shared/er404/er404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { RoyalCustomerComponent } from './royal-customer/royal-customer.component';
import { RulesComponent } from './rules/rules.component';
import { AcculativePointsComponent } from './acculative-points/acculative-points.component';
import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'er404',
    component:Er404Component
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
    HomeComponent,
    MenuComponent,
    FooterComponent,
    Er404Component,
    ServiceComponent,
    RoyalCustomerComponent,
    RulesComponent,
    AcculativePointsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    AppRoutingModule  // .../#/crisis-center/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
