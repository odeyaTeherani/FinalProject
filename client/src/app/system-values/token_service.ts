import {Injectable, InjectionToken} from '@angular/core';
import {SubRoleService} from '../shared/services/sub-role.service';
import {EventTypeService} from '../shared/services/event-type.service';

@Injectable()
export class TokenService {

    static MY_SUB_ROLE_TOKEN = new InjectionToken<SubRoleService>('role');
    static MY_EVENT_TOKEN = new InjectionToken<EventTypeService>('event');

    getToken(name: string): InjectionToken<any> {
        if (name === 'role') {
            return TokenService.MY_SUB_ROLE_TOKEN;
        } else if (name === 'event') {
            return TokenService.MY_EVENT_TOKEN;
        } else {
            throw new Error(`No token with name ${name} found`);
        }
    }
}
