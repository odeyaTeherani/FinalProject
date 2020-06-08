import {Component, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {UserInformation} from '../shared/modles/userInformation';
import {UserService} from '../shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  isNotMobile: boolean;
  mobileQuery: MediaQueryList;
  users: UserInformation [];
  private readonly mobileQueryListener: () => void;

  constructor(media: MediaMatcher, private userService: UserService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => {
      this.isNotMobile = !this.mobileQuery.matches;
    };
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit() {
    this.userService.getAll()
      .subscribe(
        (users: UserInformation[]) => {
          this.users = users;
          console.log('Back from server - ', users);
        },
        (error) => {
          console.log(error);
        });
  }

  closeEvent(event: MouseEvent) {
  }

  // ngOnDestroy():void {
  //   this.mobileQuery.removeListener(this.mobileQueryListener);
  // }

}
