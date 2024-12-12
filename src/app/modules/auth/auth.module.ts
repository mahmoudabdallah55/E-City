import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { LoginWithGoogleComponent } from './components/login-with-google/login-with-google.component';



@NgModule({
  declarations: [
    LoginComponent,
    LoginWithGoogleComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent
  ]
})
export class AuthModule { }
