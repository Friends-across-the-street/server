import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
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

@ApiTags('CHAT')
@Controller('chat')
export class ChatController {
  constructor(private chatService: ChatService) {}

  @ApiOperation({ summary: '채팅 전송' })
  @ApiResponse({ status: 200, description: '채팅 전송 성공' })
  @ApiResponse({ status: 404, description: '상대방을 찾을 수 없음' })
  @ApiParam({ name: 'id', type: Number, description: '대상 유저 ID' })
  @ApiBearerAuth('access-token')
  @Post('/:id')
  @UseGuards(AuthGuard)
  async send(@Param('id') id: number, @Body() dto: SendChatDto) {
    return await this.chatService.send(id, dto);
  }
}
