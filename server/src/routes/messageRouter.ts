import { Router } from 'express';
import { sendConfirmMsg } from '../controllers/messageController';

const router = Router();

router.post('/sendMsg', sendConfirmMsg);

export default router;