import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  title: string;
  @IsString()
  @MinLength(3)
  content: string;
  incumbentUserId: number;
  studentUserId: number;
}
