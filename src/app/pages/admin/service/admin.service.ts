import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../login/models/user';
import {Observable} from 'rxjs';



@Injectable({
    providedIn: 'root',
})
export class AdminService {

    constructor(private http: HttpClient) {
    }

    public fetchUsers(): Observable<User[]> {
        return this.http.get<User[]>('http://localhost:8080/admin/users');
    }
}
