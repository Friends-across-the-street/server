import { Body, Controller, Post } from '@nestjs/common';
import { ChatService } from './chat.service';
import { SendChatDto } from './dto/send.dto';

@Controller('chat')
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Post()
  async send(@Body() dto: SendChatDto) {
    return await this.chatService.send(dto);
  }
}
