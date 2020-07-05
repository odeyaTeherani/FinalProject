import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ConsultRoutes} from './consult-routing';
import {

} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {FlexModule} from '@angular/flex-layout';
import {MatInputModule} from '@angular/material';
import {GooglePlacesModule} from '../shared/directives/google-places/google-places.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {SeverityLevelModule} from '../shared/components/severity-level/severity-level.module';
import {SharedModule} from '../shared/shared.module';
import { ConsultTextComponent } from './consult-text/consult-text.component';
import { ConsultComponent } from './consult.component';
import { ConsultFilterComponent } from './consult-filter/consult-filter.component';
import {MatListModule} from '@angular/material';


@NgModule(
  {
    imports: [CommonModule,
      RouterModule.forChild(ConsultRoutes),
      MatCardModule,
      MatFormFieldModule,
      MatSelectModule,
      MatButtonModule,
      FlexModule, MatInputModule,
      GooglePlacesModule,
      ReactiveFormsModule,
      MatAutocompleteModule,
      MatIconModule,
      SeverityLevelModule,
      SharedModule, MatListModule],
    declarations:[ConsultFilterComponent, ConsultTextComponent, ConsultComponent]
  }
)
export class ConsultModule {

}
