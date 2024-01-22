import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsInt,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Gender } from '../../../prisma/generated/mysql';

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
  @IsEnum(Gender)
  @ApiProperty({ description: '성별' })
  readonly gender: Gender;
}
