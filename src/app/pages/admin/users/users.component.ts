import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AdminService} from '../service/admin.service';
import {BehaviorSubject} from 'rxjs';
import {User} from '../../login/models/user';

@Component({
    selector: 'app-admin-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminUsersComponent implements OnInit {

    public readonly users$ = new BehaviorSubject<User[]>([]);

    constructor(private admin: AdminService) {
    }

    public ngOnInit(): void {
        this.admin.fetchUsers().subscribe(
            (users: User[]) => {
                this.users$.next(users);
            }
        );
    }
}
