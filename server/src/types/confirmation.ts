export interface SendConfirmationEmailParams {
  toEmail: string;
  token: string;
  type: string
  fname?: string;
  lname?: string,
  content?: string,
}

export type CommonFields = {
  token: string;
  status: string;
  save: () => Promise<any>;
};