import {NgModule} from '@angular/core';
import {AdminLayoutComponent} from './components/admin-layout/admin-layout.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {CommonModule, DatePipe} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {
    MatAutocompleteModule,
    MatButtonModule, MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule, MatMenuModule, MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import { SessionsLayoutComponent } from './components/sessions-layout/sessions-layout.component';
import { EventTypeComponent } from './components/event-type/event-type.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SubRoleFiledComponent } from './components/sub-role-filed/sub-role-filed.component';

@NgModule(
  {
      exports: [
          EventTypeComponent,
          SubRoleFiledComponent,
      ],
    declarations: [
      AdminLayoutComponent,
      NotFoundComponent,
      SessionsLayoutComponent,
      EventTypeComponent,
      SubRoleFiledComponent
    ],
      imports: [
          CommonModule,
          FlexLayoutModule,
          RouterModule,
          MatToolbarModule,
          MatSidenavModule,
          MatListModule,
          MatIconModule,
          MatInputModule,
          MatFormFieldModule,
          MatButtonModule,
          MatSelectModule,
          MatMenuModule,
          MatSnackBarModule,
          ReactiveFormsModule,
          MatAutocompleteModule,
          FormsModule,
          MatRadioModule
      ],
    providers: [
      DatePipe
    ],
  }
)
export class SharedModule {

}
