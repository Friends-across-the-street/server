import { ApiProperty } from '@nestjs/swagger';
import { CreateCategoryArgs } from '../interface/create.interface';
import { IsString } from 'class-validator';

export class CreateCategoryDto implements CreateCategoryArgs {
  @IsString()
  @ApiProperty({ description: '카테고리 이름', type: String })
  name: string;
}
