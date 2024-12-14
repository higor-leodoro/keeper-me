import { IsEmail, IsOptional, IsString, IsUUID } from 'class-validator';

export class UserDto {
  @IsOptional()
  @IsUUID()
  id: string;

  @IsString()
  name: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
