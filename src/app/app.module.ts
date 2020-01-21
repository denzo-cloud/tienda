import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'login', component: LoginComponent }
];  

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    NavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,   
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
