import { IsEmail, IsString } from 'class-validator';

export class SendHtmlDto {
  @IsString()
  html: string;

  @IsString()
  subject!: string;

  @IsEmail()
  to: string;
}
