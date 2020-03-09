import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: 'messages',
        loadChildren: () => import('./pages/messages/messages.module').then(m => m.MessagesModule)
    },
    {
        path: 'sign-up',
        loadChildren: () => import('./pages/sign/sign.module').then(m => m.SignModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
    },
];
