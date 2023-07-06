import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { MailService } from './mail.service';
import { SendHtmlDto } from './dto/sendHtml.dto';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  // TODO: 보안 필요.
  @Post('/send')
  async sendHtmlFile(@Body() sendHtmlDto: SendHtmlDto) {
    try {
      await this.mailService.sendHTML(sendHtmlDto);
      return HttpStatus.OK;
    } catch (err) {
      console.error(err);
    }
  }
}
