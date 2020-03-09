import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {Token} from '../../login/models/token';



@Injectable({
    providedIn: 'root',
})
export class SignService {
    constructor(private http: HttpClient) {
    }

    public signUser(user: User): Observable<Token> {
        return this.http.post<Token>('http://localhost:8080/sign_up', user);
    }
}
