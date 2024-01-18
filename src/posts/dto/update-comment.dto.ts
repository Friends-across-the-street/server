import { IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCommentDto {
  @IsString()
  @MinLength(2)
  @ApiProperty({ description: '댓글 내용', type: String })
  content?: string;
}
