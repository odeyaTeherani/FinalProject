import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {RouterModule} from '@angular/router';
import {UsersRoutes} from './users-routing.module';
import {
  MatButtonModule, MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule, MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule, MatNativeDateModule,
  MatTooltipModule
} from '@angular/material';
import {FlexModule} from '@angular/flex-layout';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {FormsModule} from '@angular/forms';
import {DetailsComponent} from './details/details.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [UsersComponent,
    DetailsComponent],
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
    MatCheckboxModule,
    FormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    SharedModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatInputModule,
  ]
})
export class UsersModule { }
