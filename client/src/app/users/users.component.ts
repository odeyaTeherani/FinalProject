import {Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {UserInformation} from '../shared/modles/userInformation';
import {UserService} from '../shared/services/user.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

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

    loadUsers() {
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

    ngOnInit() {
        this.loadUsers();
    }

    hasSelectedUser() {
        if (!this.users) return false;
        return this.users.map(user => user.selected)
            .reduce((accumulator, currentValue) => accumulator || currentValue)
    }

    ngOnDestroy(): void {
        if (this.mobileQueryListener){
            this.mobileQuery.removeListener(this.mobileQueryListener);
        }
    };


    deleteUsers() {
        const idsToDelete = this.users.filter(x => x.selected).map(x => x.id);
        console.log(idsToDelete);
        idsToDelete.forEach((idToDelete, index) => {
            this.userService.deleteUser(idToDelete)
                .subscribe(
                    () => {
                        if (index == idsToDelete.length - 1) {
                            this.loadUsers();

                            console.log('load users')
                        }
                    },
                    error => {
                        console.log(error);
                    }
                );
        });
    }
}
