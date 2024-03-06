import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import {
  AddAdditionalInfoForIncumbentArgs,
  AddAdditionalInfoForStudentArgs,
} from '../interface/add-additional-info.interface';
import { dayAndNight } from 'prisma/generated/mysql';

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

  @IsEnum(dayAndNight)
  @ApiProperty({ description: '전공 주야구분', type: String })
  majorDayAndNight: dayAndNight;

  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @ApiProperty({ description: '출신 학교', type: String })
  school: string;

  @IsString()
  @MinLength(2)
  @ApiProperty({ description: '학교 분교(캠퍼스)', type: String })
  schoolBranch: string;

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
  implements AddAdditionalInfoForStudentArgs
{
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @ApiProperty({ description: '희망 세부 업무', type: String })
  wishJobDescription: string;

  @IsString()
  @MinLength(2)
  @MaxLength(10)
  @ApiProperty({ description: '학부 전공', type: String })
  major: string;

  @IsEnum(dayAndNight)
  @ApiProperty({ description: '전공 주야구분', type: String })
  majorDayAndNight: dayAndNight;

  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @ApiProperty({ description: '재학 학교', type: String })
  school: string;

  @IsString()
  @MinLength(2)
  @ApiProperty({ description: '학교 분교(캠퍼스)', type: String })
  schoolBranch: string;

  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @ApiProperty({ description: '희망 회사 이름', type: String })
  wishCompanyName: string;

  @IsOptional()
  @MinLength(2)
  @MaxLength(50)
  @ApiProperty({ description: '희망 회사 복지', type: String })
  wishCompanyWelfare?: string;

  // TODO 위치 세분화 필요
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @ApiProperty({ description: '회사 위치', type: String })
  wishCompanyLocation: string;
}
