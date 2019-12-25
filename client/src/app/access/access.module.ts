import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';


@NgModule(
  {
    imports:[CommonModule],
    declarations:[LogInComponent, ForgetPasswordComponent]
  }
)
export class AccessModule {

}
