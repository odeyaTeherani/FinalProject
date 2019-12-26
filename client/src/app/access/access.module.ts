import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import {MatFormFieldModule} from '@angular/material';


@NgModule(
  {
    imports: [CommonModule, MatFormFieldModule],
    declarations:[LogInComponent, ForgetPasswordComponent]
  }
)
export class AccessModule {

}
