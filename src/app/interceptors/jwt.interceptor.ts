import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('id_token');
        const headers = token
            ? new HttpHeaders({
                Authorization: `Bearer ${token}`
            })
            : new HttpHeaders();
        const clonedReq = req.clone({headers});
        return next.handle(clonedReq);
    }
}
