import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {RouterModule} from '@angular/router';
import {UsersRoutes} from './users-routing.module';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatTooltipModule} from '@angular/material';
import {FlexModule} from '@angular/flex-layout';
import {ScrollingModule} from '@angular/cdk/scrolling';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(UsersRoutes),
    MatCardModule,
    FlexModule,
    MatListModule,
    ScrollingModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class UsersModule { }
