import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BlogMessage} from '../../../models/blog-message.interface';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CreateMessageService {
    constructor(private http: HttpClient) {
    }

    public submitMessage(message: BlogMessage): Observable<BlogMessage> {
        return this.http.post<BlogMessage>('http://localhost:8080/messages', message);
    }
}
