import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubRoleItemComponent } from './sub-role-item/sub-role-item.component';
import { SubRoleListComponent } from './sub-role-list/sub-role-list.component';
import {RouterModule} from '@angular/router';
import {SubRoleRoutes} from './sub-role-routing';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatTooltipModule
} from '@angular/material';
import {FlexModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [SubRoleItemComponent, SubRoleListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SubRoleRoutes),
    MatCardModule,
    FlexModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    ReactiveFormsModule,
    MatListModule,
  ]
})
export class SubRoleModule { }
