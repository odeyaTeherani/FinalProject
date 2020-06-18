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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DetailsComponent} from './details/details.component';
import {SharedModule} from '../shared/shared.module';
import {UsersFilterComponent} from './users-filter/users-filter.component';



@NgModule({
  declarations: [UsersComponent,
    UsersFilterComponent,
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
    ReactiveFormsModule,
  ]
})
export class UsersModule { }
