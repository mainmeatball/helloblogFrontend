import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BlogMessage} from '../../../models/blog-message.interface';
import {Tag} from '../../../models/tag.interface';



@Injectable({
    providedIn: 'root',
})
export class MessagesService {
    constructor(private http: HttpClient) {
    }

    public submitMessage(message: BlogMessage): Observable<BlogMessage> {
        return this.http.post<BlogMessage>('http://localhost:8080/messages', message);
    }

    public fetchMessages(username?: string, tags?: string[]): Observable<BlogMessage[]> {
        let params = new HttpParams({fromObject: {
            dir: 'desc',
        }});
        if (username) {
            params = params.append('username', username);
        }
        if (tags) {
            params = params.append('tags', tags.join(','));
        }
        return this.http.get<BlogMessage[]>('http://localhost:8080/messages', {params});
    }

    public updateMessage(id: number, content: string): Observable<void> {
        return this.http.put<void>(`http://localhost:8080/messages/${id}`, content);
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
