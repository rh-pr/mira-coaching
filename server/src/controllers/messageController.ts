import { Request, Response } from "express";
import  {saveMsgDB}  from '../services/messageServices';
import { sendConfirmationEmail } from "../services/emailServices";

export const sendConfirmMsg = async (req: Request, res: Response) => {
    const userMsg = req.body;
    try {
        if (userMsg.fname.length <= 0 ||
            userMsg.lname.length <= 0 ||
            userMsg.email.length <= 0 ||
            userMsg.inter.length <= 0 ||
            userMsg.msg.length <= 0
        ) {
             res.status(400).json({ error: 'Invalid input. All fields are required.' });
        }
        const savedMsg = await saveMsgDB(userMsg);
        
        if (!savedMsg) {
            res.status(400).json({error: 'Data ware not saved...'})
        }

        sendConfirmationEmail({
            toEmail: req.body.email,
            token: savedMsg.token,
            fname: savedMsg.fname,
            lname: savedMsg.lname,
            type: 'message'
        });

         res.status(200).json({ message: `success` });

        console.log(req.body)
    } catch (err)  {
        console.error('Cannot save data to database:', err);
        res.status(500).json({ error: 'Internal server error' });
    }

    
}


