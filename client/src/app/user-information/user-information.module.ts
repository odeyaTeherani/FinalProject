import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {UserInformationRoutes} from './user-information-routing';
import {DetailsComponent} from './details/details.component';
import {MySettingsComponent} from './setting/my-settings.component';
import {NotificationsComponent} from './setting/notifications/notifications.component';
import {AboutTheAppComponent} from './setting/about-the-app/about-the-app.component';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule, MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatNativeDateModule,
  MatTabsModule
} from '@angular/material';
import {FlexModule} from '@angular/flex-layout';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [DetailsComponent,
    MySettingsComponent,
    NotificationsComponent,
    AboutTheAppComponent,
    ChangePasswordComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(UserInformationRoutes),
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatTabsModule,
        FlexModule,
        SharedModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        MatButtonToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule
    ]
})
export class UserInformationModule { }
