import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BlogMessage} from '../../../models/blog-message.interface';



@Injectable({
    providedIn: 'root',
})
export class MessagesService {
    constructor(private httpClient: HttpClient) {
    }

    public fetchMessages(): Observable<BlogMessage[]> {
        return this.httpClient.get<BlogMessage[]>('http://localhost:8080/messages');
    }

    public upvoteMessage(id: number): Observable<void> {
        return this.httpClient.put<void>(`http://localhost:8080/messages/${id}/upvote`, null);
    }
}
