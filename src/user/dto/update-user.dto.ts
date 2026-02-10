import {IsEnum, IsOptional, IsString, IsInt} from 'class-validator';
import {UserRole} from '@prisma/client'

export class UpdateUserDto  {

@IsString() 
@IsOptional() 
username: string; 

@IsString() 
@IsOptional() 
password: string; 

@IsEnum(UserRole)
role: UserRole
}