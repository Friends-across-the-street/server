import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { IncumbentService } from './incumbents.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { AddAddtionalDto } from './dto/add-addtional.dto';

@ApiTags('INCUMBENT-USER')
@Controller('incumbent-users')
export class IncumbentController {
  constructor(private incumbentService: IncumbentService) {}

  @ApiOperation({ summary: 'UserId로 현직자 정보 찾기' })
  @ApiResponse({ status: 200, description: '현직자 정보 찾기 성공' })
  @ApiResponse({ status: 404, description: '현직자 정보 찾을 수 없음' })
  @ApiParam({ name: 'id', type: Number, description: '현직자 ID' })
  @Get('/:id')
  async findById(@Param('id') userId: number) {
    return await this.incumbentService.findById(userId);
  }

  @ApiOperation({ summary: '현직자 추가 정보 등록' })
  @ApiResponse({ status: 201, description: '추가 정보 등록 성공' })
  @ApiResponse({
    status: 401,
    description: '헤더의 Auth정보가 존재하지 않습니다.',
  })
  @ApiResponse({ status: 403, description: '토큰이 유효하지 않습니다.' })
  @ApiResponse({
    status: 404,
    description: 'userId가 일치하지 않습니다.',
  })
  @ApiParam({ name: 'id', type: Number, description: '현직자 ID' })
  @ApiBearerAuth('access-token')
  @Post('/additional/:id')
  @UseGuards(AuthGuard)
  async addAdditional(
    @Param('id') userId: number,
    @Body() dto: AddAddtionalDto,
  ) {
    return await this.incumbentService.addAdditional(userId, dto);
  }
}
