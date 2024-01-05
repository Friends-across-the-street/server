import { IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UpdatePostArgs } from '../interface/update-post.interface';

export class UpdatePostDto implements UpdatePostArgs {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @ApiProperty({ description: '제목', type: String })
  title?: string;

  @IsString()
  @MinLength(3)
  @ApiProperty({ description: '내용', type: String })
  content?: string;
}
