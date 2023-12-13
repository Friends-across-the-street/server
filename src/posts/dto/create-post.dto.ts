import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { CreatePostArgs } from '../interface/create-post.interface';

export class CreatePostDto implements CreatePostArgs {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  title: string;
  @IsString()
  @MinLength(3)
  content: string;
  incumbentUserId: number | null;
  studentUserId: number | null;
}
