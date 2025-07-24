export interface SendConfirmationEmailParams {
  toEmail: string;
  token: string;
  fname?: string;
  lname?: string,
  content?: string,
}