import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';



@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) {
    }

    public signUser(user: User): Observable<User> {
        return this.http.post<User>('http://localhost:8080/sign_up', user);
    }
}
