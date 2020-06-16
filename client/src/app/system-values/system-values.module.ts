import {Injectable, InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ElementListComponent} from './element-list/element-list.component';
import {RouterModule} from '@angular/router';
import {
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTooltipModule
} from '@angular/material';
import {FlexModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ElementItemComponent} from './element-list/element-item/element-item.component';
import {SystemValuesComponent} from './system-values.component';
import {SystemValuesRoutes} from "./system-values-routing";
import {EventTypeService} from "../shared/services/event-type.service";
import {SubRoleService} from "../shared/services/sub-role.service";

@Injectable()
export class TokenService {
    static MY_SUB_ROLE_TOKEN = new InjectionToken<EventTypeService>('role');
    static MY_EVENT_TOKEN = new InjectionToken<EventTypeService>('event');

    getToken(name: string): InjectionToken<any> {
        if (name === 'role') {
            return TokenService.MY_SUB_ROLE_TOKEN;
        }
        else if (name === 'event') {
            return TokenService.MY_EVENT_TOKEN;
        }
        else {
            throw `No token with name ${name} found`;
        }
    }
}

@NgModule({
    declarations: [
        ElementListComponent,
        ElementItemComponent,
        SystemValuesComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(SystemValuesRoutes),
        MatCardModule,
        MatListModule,
        FlexModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    providers: [
        TokenService,
        { provide: TokenService.MY_EVENT_TOKEN, useClass: EventTypeService },
        { provide: TokenService.MY_SUB_ROLE_TOKEN, useClass:  SubRoleService }
    ]
})
export class SystemValuesModule {
}


