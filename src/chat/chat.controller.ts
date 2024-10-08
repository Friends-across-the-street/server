import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ChatService } from './chat.service';
import { SendChatDto } from './dto/send.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserDataInAuthGuard } from 'src/global/types/user.type';
import { RequestUser } from 'src/global/decorator/request-user.decorator';

@ApiTags('CHAT')
@Controller('chat')
export class ChatController {
  constructor(private chatService: ChatService) {}

  @ApiOperation({ summary: '채팅 전송' })
  @ApiResponse({ status: 200, description: '채팅 전송 성공' })
  @ApiResponse({ status: 404, description: '상대방을 찾을 수 없음' })
  @ApiParam({
    name: 'receiverId',
    type: Number,
    description: '보낼 대상 유저 ID',
  })
  @ApiBearerAuth('access-token')
  @Post('/:receiverId')
  @UseGuards(AuthGuard)
  async send(
    @Param('receiverId') id: number,
    @Body() dto: SendChatDto,
    @RequestUser() user: UserDataInAuthGuard,
  ) {
    return await this.chatService.send(id, dto, user);
  }

  @ApiOperation({ summary: '채팅 확인' })
  @ApiResponse({ status: 200, description: '채팅 확인 성공' })
  @ApiResponse({ status: 404, description: '상대방을 찾을 수 없음' })
  @ApiParam({ name: 'userId', type: Number, description: '대상 유저 ID' })
  @ApiBearerAuth('access-token')
  @Get('/room/:userId')
  @UseGuards(AuthGuard)
  async getChat(
    @Param('userId') userId: number,
    @RequestUser() user: UserDataInAuthGuard,
  ) {
    return await this.chatService.getChat(userId, user);
  }

  @ApiOperation({ summary: '채팅룸 확인' })
  @ApiResponse({ status: 200, description: '채팅룸 확인 성공' })
  @ApiResponse({ status: 404, description: '상대방을 찾을 수 없음' })
  @ApiBearerAuth('access-token')
  @Get('/room')
  @UseGuards(AuthGuard)
  async getRoom(@RequestUser() user: UserDataInAuthGuard) {
    return await this.chatService.getRoom(user);
  }
}
