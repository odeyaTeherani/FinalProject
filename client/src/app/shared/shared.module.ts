import {NgModule} from '@angular/core';
import {AdminLayoutComponent} from './components/admin-layout/admin-layout.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {
  MatAutocompleteModule,
  MatButtonModule, MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { SessionsLayoutComponent } from './components/sessions-layout/sessions-layout.component';
import { EventTypeComponent } from './components/event-type/event-type.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule(
  {
    exports: [
      EventTypeComponent
    ],
    declarations: [
      AdminLayoutComponent,
      NotFoundComponent,
      SessionsLayoutComponent,
      EventTypeComponent
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
      ReactiveFormsModule,
      MatAutocompleteModule
    ],
  }
)
export class SharedModule {

}
