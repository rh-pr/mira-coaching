import {Router} from 'express';
import { confirmEmail } from '../controllers/confirmController';

const router = Router();

router.get('/', confirmEmail);

export default router;