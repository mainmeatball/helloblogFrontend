import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BlogMessage} from '../../../models/blog-message.interface';



@Injectable({
    providedIn: 'root',
})
export class MessagesService {
    constructor(private http: HttpClient) {
    }

    public submitMessage(message: BlogMessage): Observable<BlogMessage> {
        return this.http.post<BlogMessage>('http://localhost:8080/messages', message);
    }

    public fetchMessages(): Observable<BlogMessage[]> {
        return this.http.get<BlogMessage[]>('http://localhost:8080/messages');
    }

    public upvoteMessage(id: number): Observable<void> {
        return this.http.put<void>(`http://localhost:8080/messages/${id}/upvote`, null);
    }

    public downvoteMessage(id: number): Observable<void> {
        return this.http.put<void>(`http://localhost:8080/messages/${id}/downvote`, null);
    }

    public deleteMessage(id: number): Observable<void> {
        return this.http.delete<void>(`http://localhost:8080/messages/${id}`);
    }
}
