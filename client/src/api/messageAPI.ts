import { KontaktDataType } from '../types/main'

const baseUrl = import.meta.env.VITE_URL || 'http://localhost:3000/api';

export const sendMsg = async (msg: KontaktDataType) =>{
    try {
        const response =  await fetch(`${baseUrl}/message/sendMsg`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(msg)
        });

         if (!response.ok) {
            console.error('Server error:', response.status, response.statusText);
            return false;
        }

        return true;

    } catch (err) {
        console.error('Error sendign message: ', err);
        return false;
    }
}