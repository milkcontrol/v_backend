import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import {SentMessageInfo} from 'nodemailer/lib/smtp-transport';
import {Token} from './token';

interface IMailError extends Error {
  code?: string;
  path?: string;
  syscall?: string;
}

type TMailAuth = {
  user: string;
  pass: string;
};

export type TMailConfig = {
  host: string;
  port: number;
  secure: boolean;
  auth: TMailAuth;
  tls?: object;
};

type TMailMessage = {
  to: {
    id: string;
    name: string;
    email: string;
  };
  subject: string;
  body: string;
};

class MailClient {
  private static _instance: MailClient;
  public transport: Mail<SentMessageInfo> | undefined;
  private _config: TMailConfig | undefined;

  private constructor() {}

  public static get Instance() {
    return this._instance || (this._instance = new MailClient());
  }

  public setConfig(option: TMailConfig): Promise<void> {
    if (this.transport)
      return new Promise((resolve, reject) => {
        const code = 'E_CONFIG_MAIL_CLIENT';
        const err: IMailError = new Error(
          `${code} mailClient configuration is only allowed to be declared once`
        );
        err.code = code;
        console.log('====> 1: ', err);
        reject(err);
      });
    this._config = option;
    this.transport = nodemailer.createTransport(option);
    return new Promise((resolve, reject) => {
      if (!this.transport) return new Promise((resolve, reject) => reject());
      this.transport.verify(error => {
        if (error) {
          const code = 'E_CONFIG_MAIL_CLIENT';
          const err: IMailError = new Error(`${code} ${error.message}`);
          err.code = code;
          reject(err);
          console.log('====> 2: ', error);
        }
        resolve();
      });
    });
  }

  public sendMessage(message: TMailMessage): Promise<void> {
    const token = Token.encrypt(JSON.stringify(message.to));
    let emailContent =
      '<div style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;color: #000000;background: #ffffff;line-height: 21px;font-size: 16px;letter-spacing: normal;">' +
      '<div class="emailWrap" style="width: 100%;background-color: #ffffff;position: relative;">' +
      '<div class="emailContentWrap" style="max-width: 640px;background-color: #ffffff;position: relative;margin: 0 auto;">' +
      '<div class="emailLogo" style="border-bottom: 1px solid #cccccc;padding-top: 10px;padding-bottom: 10px;width: 100%;">' +
      '<a href="' +
      process.env.API_URL +
      '" style="display: block;max-width: 200px;"><img style=" width: 100%;height: auto;" src="' +
      `${process.env.API_URL}/images/logo.png` +
      '" width="200"></a>' +
      '</div>' +
      '<div class="emailContent" style="width: 100%;position: relative;">' +
      '<div class="postCommentName" style="padding-top: 20px;padding-bottom: 15px;">' +
      `Hi ${message.to.name}.<br/><br/>` +
      `${message.body}<br/><br/>Thanks and best regards !<br/>${process.env.APP_NAME} </div></div>` +
      '<div class="emailFooter" style="border-top: 1px solid #cccccc;width: 100%; margin-bottom: 10px; font-size: 11px;margin-top: 10px;color: #666666;">' +
      '<p style="padding-top: 10px;padding-bottom: 10px;color: #666666;line-height: 16px;">' +
      `This message was sent to ${message.to.name}. If you prefer not to receive further communication, please <a href='${process.env.API_URL}/emails?token=${token}'>Click here</a>` +
      '</p>' +
      '</div>';

    emailContent = emailContent + '</div>' + '</div>' + '</div>';
    // Message object
    const data: {from: string; to: string; subject: string; html: string} = {
      // sender info
      from: `"V-Live notification" <${this._config?.auth.user}>`,
      // Comma separated list of recipients
      to: `"${message.to.name}" <${message.to.email}>`,
      // Subject of the message
      subject: message.subject,
      // HTML body
      html: emailContent,
    };

    return new Promise(resolve => {
      this.transport?.sendMail(data, err => {
        if (err) {
          const code = 'E_MAIL_CLIENT_SEND_MESSAGE';
          const error: IMailError = new Error(
            `${code} Error sending email to ${message.to.name} <${message.to.email}>`
          );
          console.log('====> 2: ', err);
          error.code = code;
        }
        resolve();
      });
    });
  }
}

const mailClient = MailClient.Instance;
export default mailClient;
