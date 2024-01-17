import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @IsString()
  @MinLength(3)
  @ApiProperty({ description: '댓글 내용', type: String })
  content: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ description: '부모 댓글 ID', type: Number })
  parentCommentId?: number;
}
