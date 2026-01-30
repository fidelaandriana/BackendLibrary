import {UserRole} from '@prisma/client'

export type User = {
    id : number;
    username: string;
    password: string;
    role: UserRole
}