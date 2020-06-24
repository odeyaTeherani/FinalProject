import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SubRole} from '../../modles/sub-role';
import {SubRoleService} from '../../services/sub-role.service';

@Component({
  selector: 'app-sub-role-filed',
  templateUrl: './sub-role-filed.component.html',
  styleUrls: ['./sub-role-filed.component.scss']
})
export class SubRoleFiledComponent  implements OnInit {
  options: SubRole [];

  @Output() subChanged = new EventEmitter<any>();
  @Input() size = 50;
  @Input() disabled = false;
  @Input() defaultValue?: { id: number, name: string };
  @Input() appearance;
  @Input() required = true;

  constructor(private subRoleService: SubRoleService) {}

  ngOnInit() {
    this.subRoleService.get()
      .subscribe(
        (subRole: SubRole[]) => {
          this.options = subRole;
        },
        error => {
          console.log(error);
        }
      );
  }

  displayWith(subRole: { id: number, name: string }) {
    if (subRole == null) {
      return;
    }
    return subRole.name;
  }
}

