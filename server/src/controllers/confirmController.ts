import { Request, Response } from "express";
import { updateStatusDB } from '../services/confirmationServices';
import { sendEmailToAdmim } from '../services/emailServices';

export const confirmEmail = async (req: Request, res: Response) => {
    const { token, type } = req.query;
    
    if (!token || !type) {
        res.status(400).json({error: 'Invalid input. All fields are required.'});
        return;
    }
    
    try {
        const updated = await updateStatusDB(token as string, type as 'message' || 'review');

        if (!updated) {
            res.status(400).json({error: 'Confirmation failed. Can not find email in db...'});
            return;
        }
        
        if (type === 'message' && updated.email && isMessageType(updated) ) {
            sendEmailToAdmim({
                toEmail: updated.email,
                fname: updated.fname,
                lname: updated.lname,
                content: updated.message,
                interess: updated.interess
            })
        }
        res.status(200).json({message: 'success'});
    } catch (err) {
        console.error('Confirmation failed:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

function isMessageType(record: any): record is {
  message: string;
  interess: string;
} {
  return 'message' in record && 'interess' in record;
}