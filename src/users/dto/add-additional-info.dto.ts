import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { AddAdditionalInfoArgs } from '../interface/add-additional-info.interface';

export class AddAdditionalInfo implements AddAdditionalInfoArgs {
  @IsNumber()
  @ApiProperty({ description: '학교 ID', type: Number })
  schoolId: number;

  @IsNumber()
  @ApiProperty({ description: '전공 ID', type: Number })
  majorId: number;

  @IsNumber()
  @ApiProperty({ description: '회사 ID(희망)', type: Number })
  companyId: number;

  @IsNumber()
  @ApiProperty({ description: '직업 대분류 ID', type: Number })
  bigJobKindId: number;

  @IsNumber()
  @ApiProperty({ description: '직업 중분류 ID', type: Number })
  midJobKindId: number;

  @IsNumber()
  @ApiProperty({ description: '직업 소분류 ID', type: Number })
  smallJobKindId: number;

  @IsNumber()
  @ApiProperty({ description: '직업 id', type: Number })
  jobId: number;

  @IsString()
  @ApiProperty({ description: '전공 계열', type: String })
  schoolAffiliate: string;

  @IsString()
  @ApiProperty({ description: '본/분교 구분', type: String })
  schoolBranch: string;

  @IsString()
  @ApiProperty({ description: '주야구분', type: String })
  schoolDayAndNight: string;

  @IsString()
  @ApiProperty({ description: '졸업학위', type: String })
  schoolDegree: string;
}
