import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsInt,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateIncumbentUserDto {
  @IsString()
  @IsEmail()
  @MaxLength(60)
  readonly email: string;

  @IsString()
  @MinLength(2)
  @MaxLength(30)
  readonly password: string;

  @Transform((params) => params.value.trim())
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  readonly name: string;

  @IsInt()
  @MinLength(1)
  @MaxLength(3)
  readonly age: number;

  readonly gender: string;
  readonly image: string;
  readonly major: string;
  readonly school: string;
  readonly job_description: string;
  readonly company_name: string;
  readonly company_welfare: string;
  readonly company_location: string;
}
