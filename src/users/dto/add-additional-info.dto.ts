import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
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
}
