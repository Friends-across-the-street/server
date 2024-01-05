import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsInt,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Gender } from '@prisma/client';

export class CreateStudentUserDto {
  @Transform((params) => params.value.trim())
  @IsString()
  @IsEmail()
  @MaxLength(60)
  @ApiProperty({ description: '이메일' })
  readonly email: string;

  @Transform((params) => params.value.trim())
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  @ApiProperty({ description: '비밀번호' })
  readonly password: string;

  @Transform((params) => params.value.trim())
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  @ApiProperty({ description: '이름' })
  readonly name: string;

  @IsInt()
  @ApiProperty({ description: '나이' })
  readonly age: number;

  @ApiProperty({ description: '성별' })
  @Transform((params) => params.value.trim())
  @IsEnum(Gender)
  readonly gender: Gender;

  @Transform((params) => params.value.trim())
  @IsString()
  @ApiProperty({ description: '사용자 이미지 url' })
  readonly image: string;

  @IsNumber()
  @ApiProperty({ description: '평점 / 학점' })
  readonly total_grade: number;

  @Transform((params) => params.value.trim())
  @IsString()
  @ApiProperty({ description: '현재 전공' })
  readonly major: string;

  @Transform((params) => params.value.trim())
  @IsString()
  @ApiProperty({ description: '현재 재학(졸업) 학교' })
  readonly school: string;

  @Transform((params) => params.value.trim())
  @IsString()
  @ApiProperty({ description: '희망 직무 분야' })
  readonly wish_job_description: string;

  @Transform((params) => params.value.trim())
  @IsString()
  @ApiProperty({ description: '희망 회사 이름' })
  readonly wish_company_name: string;

  @Transform((params) => params.value.trim())
  @IsString()
  @ApiProperty({ description: '희망 회사 복지' })
  readonly wish_company_welfare: string;

  @Transform((params) => params.value.trim())
  @IsString()
  @ApiProperty({ description: '희망 회사 위치' })
  readonly wish_company_location: string;
}
