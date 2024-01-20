import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AddAddtionalDto {
  @IsOptional()
  @IsUrl()
  @ApiProperty({ description: '유저 이미지', type: String })
  image: string;

  @IsString()
  @ApiProperty({ description: '출신 학교', type: String })
  school: string;

  @IsString()
  @ApiProperty({ description: '전공', type: String })
  major: string;

  @IsString()
  @ApiProperty({ description: '회사 이름', type: String })
  companyName: string;

  @IsString()
  @ApiProperty({ description: '회사 복지(flag방식)', type: String })
  companyWelfare: string;

  @IsString()
  @ApiProperty({ description: '회사 위치', type: String })
  companyLocation: string;

  @IsString()
  @ApiProperty({ description: '세부 분야', type: String })
  jobDescription: string;
}
