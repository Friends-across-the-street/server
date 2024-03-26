import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RegisterShortSpecDto {
  @IsString()
  @ApiProperty({ description: '한줄 스펙', type: String, required: true })
  spec: string;
}
