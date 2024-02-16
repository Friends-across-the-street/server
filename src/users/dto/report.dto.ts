import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class ReportUserDto {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @ApiProperty({ description: '신고 이유', type: String })
  reason: string;
}
