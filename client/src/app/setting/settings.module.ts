import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { AboutTheAppComponent } from './about-the-app/about-the-app.component';
import { MySettingsComponent } from './my-settings/my-settings.component';
import { NotificationsComponent } from './notifications/notifications.component';
import {SettingRoutes} from './settings-routing';
import {
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule, MatTabsModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule(
  {
      imports: [CommonModule,
          RouterModule.forChild(SettingRoutes),
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        FlexLayoutModule,
        MatTabsModule,
      ],
    declarations:[DetailsComponent,
      AboutTheAppComponent,
      MySettingsComponent,
      NotificationsComponent]
  }
)
export class SettingsModule {

}