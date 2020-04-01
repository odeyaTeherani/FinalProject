import {NgModule} from '@angular/core';
import {ConsultComponent} from './consult.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ConsultRoutes} from './consult-routing';
import {

} from '@angular/material';


@NgModule(
  {
    imports: [CommonModule,
      RouterModule.forChild(ConsultRoutes)],
    declarations:[ConsultComponent]
  }
)
export class ConsultModule {

}
