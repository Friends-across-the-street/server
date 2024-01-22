import { UserType } from '@prisma/client';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class SendChatDto {
  @IsNumber()
  @IsNotEmpty()
  senderId: number;

  @IsNumber()
  @IsNotEmpty()
  receiverId: number;

  @IsEnum(UserType)
  @IsNotEmpty()
  senderType: UserType;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsBoolean()
  read: boolean = false;
}
