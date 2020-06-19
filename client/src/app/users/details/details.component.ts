import {Component, OnInit} from '@angular/core';
import {UserInformation} from '../../shared/modles/userInformation';
import {SubRole} from '../../shared/modles/sub-role';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../../shared/services/account.service';
import {UserService} from '../../shared/services/user.service';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDailogModule} from "../../shared/components/confirm-dialog/confirm-dailog.module";
import {ConfirmDialogComponent} from "../../shared/components/confirm-dialog/confirm-dialog.component";


@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
    extraDetailsUser = false;
    isAdmin = false;
    paramId: string = null;
    image = null;
    user: UserInformation = {
        subRole: {name: '', id: null},
        image: '',
        userName: '',
        id: '',
        email: '',
        password: '',
        confirmPassword: '',
        selected: false,
        role: 'user',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        carNumber: '',
        birthDate: null
    };
    addMode = false;
    subRole: SubRole;

    constructor(private fb: FormBuilder,
                public dialog: MatDialog,
                private activeRoute: ActivatedRoute,
                private router: Router,
                private accountService: AccountService,
                private userService: UserService) {
    }

    loadPerson() {
        this.activeRoute.params.subscribe(
            (params) => {
                this.paramId = params.id;
                if (this.paramId === 'addUser') {
                    this.addMode = true;
                    this.extraDetailsUser = true;
                } else {

                    if (this.paramId != null) {
                        this.extraDetailsUser = true;
                        this.userService.getById(this.paramId)
                            .subscribe(
                                (user: UserInformation) => {
                                    this.user = user;
                                    this.subRole = user.subRole;
                                    this.image = user.image;
                                    console.log(this.subRole);
                                },
                                error => {
                                    console.log(error);
                                });
                    } else {
                        this.accountService.getCurrentUser()
                            .subscribe(
                                (user: UserInformation) => {
                                    this.user = user;
                                    this.subRole = user.subRole;
                                    this.image = user.image;
                                    console.log('CurrentUser: ');
                                    console.log(this.user);
                                },
                                error => {
                                    console.log(error);
                                });
                    }
                }
            });
        if (this.user.role === 'admin') {
            this.isAdmin = true;
        }
    }

    ngOnInit() {
        this.loadPerson();
    }

    onFileSelected(event) {
        const selectedFile = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (e: any) => {
            this.image = e.target.result;
        };
    }

    save() {
        this.user.image = this.image;
        this.user.role = 'user';
        this.user.subRole = this.subRole;
        if (this.addMode === true) {
            this.accountService.register(this.user)
                .subscribe(() => {
                        this.router.navigate(['/users']);
                    },
                    error => {
                        console.log(error);
                    });
        }
        else {
            this.userService.updateUser(this.user)
                .subscribe(
                    () => {
                        this.router.navigate(['/users']);
                    },
                    error => {
                        console.log(error);
                    });
        }
    }

    deleteUser() {

        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: '450px',
            data: {f: 'fffff'}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result)
            if (result == 'fdfds') {
                this.userService.deleteUser(this.paramId)
                    .subscribe(
                        () => {
                            this.router.navigate(['/users']);
                        },
                        error => {
                            console.log(error);
                        }
                    );
            }
        });
    }
}

