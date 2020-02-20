import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: 'messages',
        loadChildren: () => import('./pages/messages/messages.module').then(m => m.MessagesModule)
    },
    {
        path: 'sign-up',
        loadChildren: () => import('./pages/sign/sign.module').then(s => s.SignModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(s => s.LoginModule)
    },
];
