import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT || 3000,
    baseUrl: process.env.BASE_URL || 'http://localhost:5173',
    dbUri: process.env.DB_URI || 'mongodb://localhost:27017/email_confirm_db',
}