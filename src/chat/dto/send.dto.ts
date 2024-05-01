import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class SendChatDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: '메세지 내용' })
  message: string;
}
