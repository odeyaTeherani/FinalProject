import {NgModule} from '@angular/core';
import {ConsultComponent} from './consult.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ConsultRoutes} from './consult-routing';
import {

} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from "@angular/material/button";
import {FlexModule} from "@angular/flex-layout";


@NgModule(
  {
    imports: [CommonModule,
      RouterModule.forChild(ConsultRoutes), MatCardModule, MatFormFieldModule, MatSelectModule, MatButtonModule, FlexModule],
    declarations:[ConsultComponent]
  }
)
export class ConsultModule {

}
