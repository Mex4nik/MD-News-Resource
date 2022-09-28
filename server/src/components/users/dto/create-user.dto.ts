import { IsString, Length, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Should be string' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string;

  @IsString({ message: 'Should be string' })
  @Length(4, 16, { message: 'More that 4, less then 16' })
  readonly password: string;
}
