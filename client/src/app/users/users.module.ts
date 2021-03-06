import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {RouterModule} from '@angular/router';
import {UsersRoutes} from './users-routing.module';
import {
    MatButtonModule, MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule, MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule, MatInputModule,
    MatListModule, MatNativeDateModule, MatProgressSpinnerModule,
    MatTooltipModule
} from '@angular/material';
import {FlexModule} from '@angular/flex-layout';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {UsersFilterComponent} from './users-filter/users-filter.component';
import {ConfirmDialogModule} from '../shared/components/confirm-dialog/confirm-dialog.module';
import {ConfirmDialogComponent} from '../shared/components/confirm-dialog/confirm-dialog.component';


@NgModule({
    declarations: [UsersComponent,
        UsersFilterComponent],
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
        ConfirmDialogModule,
        MatProgressSpinnerModule
    ],
    entryComponents: [ConfirmDialogComponent]
})
export class UsersModule {
}
