import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import {
  AddAdditionalInfoForIncumbentArgs,
  AddAdditionalInfoForStudentArgs,
} from '../interface/add-additional-info.interface';

export class AddAdditionalInfoForIncumbentDto
  implements AddAdditionalInfoForIncumbentArgs
{
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @ApiProperty({ description: '세부 업무', type: String })
  jobDescription: string;

  @IsString()
  @MinLength(2)
  @MaxLength(10)
  @ApiProperty({ description: '학부 전공', type: String })
  major: string;

  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @ApiProperty({ description: '출신 학교', type: String })
  school: string;

  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @ApiProperty({ description: '회사 이름', type: String })
  companyName: string;

  @IsOptional()
  @MinLength(2)
  @MaxLength(50)
  @ApiProperty({ description: '회사 복지', type: String })
  companyWelfare?: string;

  // TODO 위치 세분화 필요
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @ApiProperty({ description: '회사 위치', type: String })
  companyLocation: string;
}

export class AddAdditionalInfoForStudentDto
  implements AddAdditionalInfoForStudentArgs {}
