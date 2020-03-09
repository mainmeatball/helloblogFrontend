import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TokenUser} from '../models/token-user.interface';
import jwt_decode from 'jwt-decode';

@Injectable({
    providedIn: 'root',
})
export class UserService {

    public readonly logged$ = new BehaviorSubject<TokenUser>({auth: [], sub: ''});

    public initialize() {
        const token = localStorage.getItem('id_token');
        if (token) {
            const user: TokenUser = jwt_decode(token);
            this.logged$.next(user);
        } else {
            this.logged$.next({sub: '', auth: []});
        }
    }

    public userChanges(): Observable<TokenUser> {
        return this.logged$.asObservable();
    }

    public setToken(jwt: string) {
        localStorage.setItem('id_token', jwt);
        this.initialize();
    }

    public removeToken() {
        localStorage.removeItem('id_token');
        this.initialize();
    }
}
