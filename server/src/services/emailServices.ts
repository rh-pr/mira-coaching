import nodemailer from 'nodemailer';
import {SendConfirmationEmailParams } from '../types/confirmation';
import emailConfig  from '../config/mail';
import mainConfig from '../config/index';

export async function sendConfirmationEmail(params: SendConfirmationEmailParams) {
    const transporter = nodemailer.createTransport(emailConfig);

    // const confirmationLink = `${mainConfig.baseUrl}/confirm?token=${params.token}?type=${params.type}`;
    const confirmationLink = `${mainConfig.baseUrl}/confirm?token=${params.token}&type=${params.type}`;
    
    const mailOptions = {
        from: emailConfig.auth.user,
        to: params.toEmail,
        subject: 'Bitte, besätigen Ihre Email',
        html: `
            <p> Hallo ${params.fname} ${params.lname}, </p>
            <p> vielen Dank für Ihre Registrierung! Bitte bestätigen Sie Ihre E-Mail-Adresse, indem Sie auf den folgenden Link klicken:
            Vielen Dank für Ihre Registrierung! Bitte bestätigen Sie Ihre E-Mail-Adresse, indem Sie auf den folgenden Link klicken:</p>

            <p> <a href="${confirmationLink}" target="_blank">E-Mail bestätigen</a> </p>
            <p>Wenn Sie dies nicht angefordert haben, können Sie diese E-Mail2 einfach ignorieren. </p>
        `
    }

    await transporter.sendMail(mailOptions);
}

export async function sendEmailToAdmim(params: SendConfirmationEmailParams) {
    const transporter = nodemailer.createTransport(emailConfig);
    
    const mailOptions = {
        from: params.toEmail,
        to: emailConfig.auth.user,
        subject: 'Nachrichten von deine Seite...',
        html: `
            <h1> Nacrichten von ${params.fname} ${params.lname}, </h1>
            <h2> Interessiren für ${params.interess} </h2>
            <p> ${params.content} </p>
        `
    }

    await transporter.sendMail(mailOptions);
}

