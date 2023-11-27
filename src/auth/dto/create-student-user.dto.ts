import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsInt,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateStudentUserDto {
  @Transform((params) => params.value.trim())
  @IsString()
  @IsEmail()
  @MaxLength(60)
  readonly email: string;

  @Transform((params) => params.value.trim())
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
  readonly age: number;

  @Transform((params) => params.value.trim())
  @IsString()
  readonly gender: string;

  @Transform((params) => params.value.trim())
  @IsString()
  readonly image: string;

  @IsNumber()
  readonly total_grade: number;

  @Transform((params) => params.value.trim())
  @IsString()
  readonly major: string;

  @Transform((params) => params.value.trim())
  @IsString()
  readonly school: string;

  @Transform((params) => params.value.trim())
  @IsString()
  readonly wish_job_description: string;

  @Transform((params) => params.value.trim())
  @IsString()
  readonly wish_company_name: string;

  @Transform((params) => params.value.trim())
  @IsString()
  readonly wish_company_welfare: string;

  @Transform((params) => params.value.trim())
  @IsString()
  readonly wish_company_location: string;
}
