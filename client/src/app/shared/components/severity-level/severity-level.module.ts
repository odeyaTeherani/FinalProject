import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SeverityLevelComponent} from './severity-level.component';
import {MatFormFieldModule, MatSelectModule} from '@angular/material';
import {FlexModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [SeverityLevelComponent],
  exports: [
    SeverityLevelComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FlexModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class SeverityLevelModule { }
