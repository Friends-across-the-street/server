import { ApiProperty } from '@nestjs/swagger';
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

  @Transform((params) => params.value.trim())
  @IsString()
  @ApiProperty({ description: '성별' })
  readonly gender: string;

  @Transform((params) => params.value.trim())
  @IsString()
  @ApiProperty({ description: '사용자 이미지 url' })
  readonly image: string;

  @Transform((params) => params.value.trim())
  @IsString()
  @ApiProperty({ description: '전공' })
  readonly major: string;

  @Transform((params) => params.value.trim())
  @IsString()
  @ApiProperty({ description: '출신 학교' })
  readonly school: string;

  @Transform((params) => params.value.trim())
  @IsString()
  @ApiProperty({ description: '현재 세부 직업 정보' })
  readonly job_description: string;

  @Transform((params) => params.value.trim())
  @IsString()
  @ApiProperty({ description: '현재 회사 이름' })
  readonly company_name: string;

  @Transform((params) => params.value.trim())
  @IsString()
  @ApiProperty({ description: '현재 회사 복지' })
  readonly company_welfare: string;

  @Transform((params) => params.value.trim())
  @IsString()
  @ApiProperty({ description: '현재 회사 위치' })
  readonly company_location: string;
}
