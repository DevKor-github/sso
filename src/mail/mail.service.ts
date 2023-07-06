import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { SendHtmlDto } from './dto/sendHtml.dto';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendVerificationCode(to: string, code: string) {
    try {
      await this.mailerService.sendMail({
        from: process.env.MAIL_USER,
        to: to,
        subject: '[DevKor] 이메일 인증 코드입니다.',
        html: `${code}를 인증 코드란에 입력해주세요.`,
      });
    } catch (err) {
      console.error(err);
    }
  }

  async sendHTML(sendHtmlDto: SendHtmlDto) {
    try {
      const { to, subject, html } = sendHtmlDto;
      await this.mailerService.sendMail({
        from: process.env.MAIL_USER,
        to: to,
        subject: subject,
        html: html,
      });
    } catch (err) {
      console.error(err);
    }
  }
}
