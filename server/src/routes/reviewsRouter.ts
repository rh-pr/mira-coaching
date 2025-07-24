import { Router } from "express";
import { getReviews, postReview } from '../controllers/reviewsController';

const router = Router();

router.get('/', getReviews);
router.post('/postReview', postReview);

export default router;