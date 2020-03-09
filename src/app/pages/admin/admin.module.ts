import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {RouterModule} from '@angular/router';
import {adminRoutes} from './admin.routes';
import {AdminUsersComponent} from './users/users.component';



@NgModule({
    declarations: [AdminComponent, AdminUsersComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(adminRoutes)
]
})
export class AdminModule { }
