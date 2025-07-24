import nodemailer from 'nodemailer';
import {SendConfirmationEmailParams } from '../types/confirmation';
import emailConfig  from '../config/mail';

export async function sendConfirmationEmail(params: SendConfirmationEmailParams) {
    const transporter = nodemailer.createTransport(emailConfig);

    const confirmationLink = `https://yourdomain.com/confirm?token=${params.token}`;

    const mailOptions = {
        from: emailConfig.auth.user,
        to: params.toEmail,
        subject: 'Bitte, besätigen Ihre Email',
        html: `
            <p> Hallo ${params.fname} ${params.lname}, </p>
            <p> vielen Dank für Ihre Registrierung! Bitte bestätigen Sie Ihre E-Mail-Adresse, indem Sie auf den folgenden Link klicken:
            Vielen Dank für Ihre Registrierung! Bitte bestätigen Sie Ihre E-Mail-Adresse, indem Sie auf den folgenden Link klicken:

            <a href="${confirmationLink}">E-Mail bestätigen</a>
            Wenn Sie dies nicht angefordert haben, können Sie diese E-Mail2 einfach ignorieren. </p>
        `
    }

    await transporter.sendMail(mailOptions);
}

