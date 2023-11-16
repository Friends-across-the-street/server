import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsInt,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  
  @IsString()
  @IsEmail()
  @MaxLength(60)
  readonly email: string;

  @Transform((params) => params.value.trim())
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  readonly name: string;

  @IsInt()
  @MinLength(1)
  @MaxLength(3)
  readonly age: number;

  @IsString()
  @MinLength(2)
  @MaxLength(30)
  readonly password: string;
}
