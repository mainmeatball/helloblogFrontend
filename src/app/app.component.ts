import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from './services/user.service';
import {Observable} from 'rxjs';
import {TokenUser} from './models/token-user.interface';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

    public readonly logged$ = this.usernameChanges();

    constructor(private router: Router,
                private user: UserService) {
    }

    ngOnInit(): void {
        this.user.initialize();
    }

    private usernameChanges(): Observable<string> {
        return this.user.userChanges()
            .pipe(
                map((user: TokenUser) => user.sub),
            );
    }

    logout(): void {
        this.user.removeToken();
        this.router.navigate(['/login']);
    }
}
