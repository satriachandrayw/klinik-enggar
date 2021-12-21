import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
    role: string;

  @IsEmail()
    email: string;

  @IsString()
    password: string;
}
