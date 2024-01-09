import { IsString, MaxLength, MinLength } from 'class-validator';
import { CreatePostArgs } from '../interface/create-post.interface';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto implements CreatePostArgs {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @ApiProperty({ description: '제목', type: String })
  title: string;

  @IsString()
  @MinLength(3)
  @ApiProperty({ description: '내용', type: String })
  content: string;
}
