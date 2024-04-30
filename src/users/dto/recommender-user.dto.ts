import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsLatitude, IsLongitude, IsNumber, IsString } from 'class-validator';

export class RecommenderUser {
  @Transform((param) => Number(param.value) + 91700)
  @IsNumber()
  @ApiProperty({ description: '유저 id', type: Number })
  index: number;

  @IsNumber()
  @ApiProperty({ description: '성별(남자 1 / 여자 0)', type: Number })
  sex: number;

  @IsString()
  @ApiProperty({ description: '이름', type: String })
  name: string;

  @IsString()
  @ApiProperty({ description: '회사 이름', type: String })
  company_name: string;

  @IsString()
  @ApiProperty({ description: '회사 주소', type: String })
  company_address: string;

  @IsLongitude()
  @ApiProperty({ description: '경도', type: Number })
  longitude: number;

  @IsLatitude()
  @ApiProperty({ description: '위도', type: Number })
  latitude: number;

  @IsString()
  @ApiProperty({ description: '회사 규모', type: String })
  company_scale: string;

  @IsString()
  @ApiProperty({ description: '회사 소분류', type: String })
  company_kind: string;

  @IsString()
  @ApiProperty({ description: '회사 중분류', type: String })
  mid_company_kind: string;

  @IsString()
  @ApiProperty({ description: '회사 대분류', type: String })
  big_company_kind: string;

  @IsNumber()
  @ApiProperty({ description: '클러스터링 그룹', type: Number })
  group: number;

  @IsString()
  @ApiProperty({ description: '직업', type: String })
  job: string;

  @IsString()
  @ApiProperty({ description: '학교 구분', type: String })
  univ_kind: string;

  @IsString()
  @ApiProperty({ description: '학교 위치', type: String })
  univ_loc: string;

  @IsString()
  @ApiProperty({ description: '학교 이름', type: String })
  univ_name: string;

  @IsString()
  @ApiProperty({ description: '학교 본/분교', type: String })
  univ_main_branch: string;

  @IsString()
  @ApiProperty({ description: '전공', type: String })
  major: string;

  @IsString()
  @ApiProperty({ description: '주야구분', type: String })
  univ_day_night: string;

  @IsString()
  @ApiProperty({ description: '전공 계열', type: String })
  field: string;

  @IsString()
  @ApiProperty({ description: '학위구분', type: String })
  education: string;
}
