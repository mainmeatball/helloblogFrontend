import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: 'messages',
        loadChildren: () => import('./pages/messages/messages.module').then(m => m.MessagesModule)
    }
];
