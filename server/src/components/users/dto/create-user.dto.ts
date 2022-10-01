import { IsString, Length, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Should be string' })
  @IsEmail({}, { message: 'Incorrect username' })
  @MinLength(4)
  readonly username: string;

  @IsString({ message: 'Should be string' })
  @IsEmail({}, { message: 'Incorrect email' })
  @MinLength(4)
  readonly email: string;

  @IsString({ message: 'Should be string' })
  @Length(4, 16, { message: 'More that 4, less then 16' })
  readonly password: string;
}
