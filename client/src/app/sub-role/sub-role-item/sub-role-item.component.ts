import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SubRole} from '../../shared/modles/sub-role';
import {SubRoleService} from '../../shared/services/sub-role.service';

@Component({
  selector: 'app-sub-role-item',
  templateUrl: './sub-role-item.component.html',
  styleUrls: ['./sub-role-item.component.scss']
})
export class SubRoleItemComponent {

  editMode = false;
  @Input() subRole: SubRole;
  @Output() onDeleteSucceed: EventEmitter<number> = new EventEmitter<number>();

  constructor(private subRoleService: SubRoleService) {}

  editSubRole() {
    this.subRoleService.put(this.subRole)
      .subscribe(
        () => {
          this.editMode = false;
        },
        error => {
          console.log(error);
        }
      );
  }

  deleteSubRole(deleted: SubRole) {
    this.subRoleService.delete(deleted.id)
      .subscribe(() => {
          this.editMode = false;
          this.onDeleteSucceed.emit(deleted.id);
        },
        error => {
          console.log(error);
        });
  }

}
