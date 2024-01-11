import { IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ReportPostDto {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @ApiProperty({ description: '신고 이유', type: String })
  reason: string;
}
