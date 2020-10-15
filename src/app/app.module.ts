import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { Er404Component } from './shared/er404/er404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AcculativePointsComponent } from './acculative-points/acculative-points.component';
import { HomeModule} from './home/home.module';
import { SharedModule} from './shared/shared.module';
import { ServiceModule} from './service/service.module';
import { IntroduceModule } from './introduce/introduce.module';
import { ContactModule } from './contact/contact.module';
import { RoyalCustomerModule } from './royal-customer/royal-customer.module';
import { LoginModule } from './login/login.module';
import { RegistrationModule } from './registration/registration.module';
import { SwitchboardModule } from './switchboard/switchboard.module';
import { RegisCusTutorialModule } from './regis-cus-tutorial/regis-cus-tutorial.module';
import { UpdatePwCusModule } from './update-pw-cus/update-pw-cus.module';
import { ProfileModule } from './profile/profile.module';


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
    path: 'royal-customer',
    loadChildren: () => import('./royal-customer/royal-customer.module').then(m => m.RoyalCustomerModule)  
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)  
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)  
  },
  {
    path: 'acculative-points',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)  
  },
  {
    path: 'regis-cus-tutorial',
    loadChildren: () => import('./regis-cus-tutorial/regis-cus-tutorial.module').then(m => m.RegisCusTutorialModule)  
  },
  {
    path: 'update-pw-cus',
    loadChildren: () => import('./update-pw-cus/update-pw-cus.module').then(m => m.UpdatePwCusModule)  
  },
  {
    path: 'switchboard',
    loadChildren: () => import('./switchboard/switchboard.module').then(m => m.SwitchboardModule)  
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)  
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
    MenuComponent,
    FooterComponent,
    Er404Component,
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
    LoginModule,
    SwitchboardModule,
    RegistrationModule,
    RoyalCustomerModule,
    ReactiveFormsModule,
    RegisCusTutorialModule,
    UpdatePwCusModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
