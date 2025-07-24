import { Request, Response } from "express";
import { updateStatusDB } from '../services/confirmationServices';

export const confirmEmail = async (req: Request, res: Response) => {
    const { token, type } = req.query;
    
    if (!token || !type) {
        res.status(400).json({error: 'Invalid input. All fields are required.'})
    }
    
    try {
        const updated = await updateStatusDB(token as string, type as 'message' || 'review');
        if (!updated) {
            res.status(400).json({error: 'Confirmation failed. Can not find email in db...'})
        }
        res.status(200).json({message: 'success'});
    } catch (err) {
        console.error('Confirmation failed:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}