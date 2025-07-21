import { KontaktDataType } from '../types/main'

const baseUrl = import.meta.env.VITE_URL || 'http://localhost:3000/api';

export const sendMsg = async (msg: KontaktDataType) =>{
    try {
        return await fetch(`${baseUrl}/sendMsg`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(msg)
        });

    } catch (err) {
        console.error('Error sendign message: ', err);
        return null
    }
}