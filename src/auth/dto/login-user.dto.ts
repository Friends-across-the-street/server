import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class UserLoginDto {
  @IsString()
  @IsEmail()
  @MaxLength(60)
  @ApiProperty({ description: '이메일' })
  email: string;

  @IsString()
  @MinLength(2)
  @MaxLength(30)
  @ApiProperty({ description: '비밀번호' })
  password: string;
}
