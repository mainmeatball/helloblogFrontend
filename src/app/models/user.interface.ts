import {Role} from './role.interface';

export interface User {
    id: number;
    username: string;
    roles: Role;
}
