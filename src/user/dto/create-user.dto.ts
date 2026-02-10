import {IsEnum, IsNotEmpty, IsString} from 'class-validator';
import { UserRole } from '@prisma/client';
 

export class CreateUserDto {

@IsString() 
@IsNotEmpty() 
username: string; 

@IsString() 
@IsNotEmpty() 
password: string; 

@IsEnum(UserRole)
role: UserRole
} 