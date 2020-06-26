import {Component, OnDestroy, OnInit} from '@angular/core';
import {ResetPassword} from '../../shared/modles/reset-password';
import {AccountService} from '../../shared/services/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {Subscription} from "rxjs";

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit, OnDestroy {

    details: ResetPassword = {
        password: '',
        confirmPassword: '',
        token: '',
        userName: ''
    };

    routesSubscription: Subscription;

    constructor(private accountService: AccountService,
                private router: Router,
                private activeRoute: ActivatedRoute,
                private snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.routesSubscription = this.activeRoute.queryParams.subscribe((params) => {
            if (params.token != null) {
                this.details.token = params.token;
            } else {
                this.router.navigate(['/sessions/signIn'])
            }
        });
    }

    change() {
        console.log(this.details);
        this.accountService.resetPassword(this.details)
            .subscribe(
                () => {
                    this.router.navigate(['/sessions/signIn']);
                },
                error => {
                    this.snackBar.open(error.error.title, 'FAIL', {duration: 4000});
                });

    }


    ngOnDestroy() {
        if (this.routesSubscription) {
            this.routesSubscription.unsubscribe();
        }
    }
}

