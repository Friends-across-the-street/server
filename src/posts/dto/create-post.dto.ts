import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @ApiProperty({ description: '제목', type: String })
  title: string;

  @IsString()
  @MinLength(3)
  @ApiProperty({ description: '내용', type: String })
  content: string;

  @IsNumber()
  @ApiProperty({ description: '카테고리 ID', type: Number })
  categoryId: number;
}
