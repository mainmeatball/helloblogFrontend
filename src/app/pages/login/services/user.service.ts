import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {Token} from '../models/token';



@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) {
    }

    public login(user: User): Observable<Token> {
        return this.http.post<Token>('http://localhost:8080/login', user);
    }
}
