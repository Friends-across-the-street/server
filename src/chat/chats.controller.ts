import { Body, Controller, Post } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { SendChatDto } from './dto/send.dto';

@Controller('chats')
export class ChatsController {
  constructor(private chatService: ChatsService) {}

  @Post()
  async send(@Body() dto: SendChatDto) {
    return await this.chatService.send(dto);
  }
}
