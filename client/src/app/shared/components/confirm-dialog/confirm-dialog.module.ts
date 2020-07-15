import {NgModule} from '@angular/core';
import {ConfirmDialogComponent} from './confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexModule} from '@angular/flex-layout';


@NgModule({
        declarations: [ConfirmDialogComponent],
        imports: [
            MatDialogModule,
            MatButtonModule,
            MatToolbarModule,
            FlexModule
        ]
    }
)
export class ConfirmDialogModule {

}
