import {Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {AdminUsersComponent} from './users/users.component';

export const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: 'users',
                component: AdminUsersComponent
            }
        ]
    },
];
