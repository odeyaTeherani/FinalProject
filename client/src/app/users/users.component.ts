import {Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {UserInformation} from '../shared/modles/userInformation';
import {UserService} from '../shared/services/user.service';
import {ConfirmDialogComponent} from "../shared/components/confirm-dialog/confirm-dialog.component";
import {MatDialog} from "@angular/material/dialog";

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

    constructor(media: MediaMatcher, private userService: UserService, private dialog: MatDialog) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this.mobileQueryListener = () => {
            this.isNotMobile = !this.mobileQuery.matches;
        };
        this.mobileQuery.addListener(this.mobileQueryListener);
    }

    searchUsersChanged(filter: any) {
        this.loadUsers(filter);
    }


    loadUsers(filter = null) {
        this.userService.get(filter)
            .subscribe(
                (users: UserInformation[]) => {
                    console.log('Back from server - ', users);
                    this.users = users;
                },
                (error) => {
                    console.log(error);
                });
    }

    ngOnInit() {
        this.loadUsers();
    }

    hasSelectedUser() {
        if (!this.users) {
            return false;
        }
        return this.users.map(user => user.selected)
            .reduce((accumulator, currentValue) => accumulator || currentValue, 0);
    }

    ngOnDestroy(): void {
        if (this.mobileQueryListener) {
            this.mobileQuery.removeListener(this.mobileQueryListener);
        }
    }


    deleteUsers() {

        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: '450px',
            autoFocus: false,
            hasBackdrop: false,
            data: {text: 'user'}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                const idsToDelete = this.users.filter(x => x.selected).map(x => x.id);
                console.log(idsToDelete);
                idsToDelete.forEach((idToDelete, index) => {
                    this.userService.deleteUser(idToDelete)
                        .subscribe(
                            () => {
                                if (index === idsToDelete.length - 1) {
                                    this.loadUsers();

                                    console.log('load users');
                                }
                            },
                            error => {
                                console.log(error);
                            }
                        );
                });
            }
        });

    }
}
