import {Injectable} from '@angular/core';

@Injectable({providedIn:'root'})
export class AuthService {

    public getToken(): string {
        return localStorage.getItem('token');
    }
    public getRole(): string {
        return localStorage.getItem('role');
    }

    public isAuthenticated(): boolean {
        const token = this.getToken();
        return token != null;
    }

    public isAdmin(): boolean {
        return this.getRole() === 'admin';
    }
}
