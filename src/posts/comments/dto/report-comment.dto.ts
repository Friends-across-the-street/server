import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ReportCommentDto {
  @IsString()
  @MinLength(3)
  @ApiProperty({ description: '신고 내용', type: String })
  reason: string;
}
