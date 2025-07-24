import { Request, Response } from "express"
import { retriveReviewDB, saveReviewDB } from "../services/reviewServices";
import { sendConfirmationEmail } from "../services/emailServices";

export const  getReviews = async (req:  Request, res: Response) => {
    try {
        const reviews = await retriveReviewDB();

        if (!reviews) {
            res.status(400).json({error: 'Failed...'});
            return;
        }

        const modifiedReviews = reviews.map((review) => ({
            id: review._id,
            fname: review.fname,
            lname: review.lname,
            email: review.email,
            msg: review.review,
            eventLoc: review.know_from,
            note: review.rate,
            radio: review.emoji
        }));

        res.status(200).json({message: 'success', data: modifiedReviews})

    } catch (err) {
        console.error('Cannot retrieve reviews from database:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const  postReview = async (req:  Request, res: Response) => {
    const userReview = req.body;

    try {
        if (userReview.fname.length <= 0 ||
            userReview.lname.length <= 0 ||
            userReview.email.length <= 0 ||
            userReview.eventLoc.length <= 0 ||
            userReview.msg.length <= 0 ||
            userReview.radio.length <= 0 ||
            userReview.note <= 0
        ) {
            res.status(400).json({ error: 'Invalid input. All fields are required.' });
            return;
        }

        const review = await saveReviewDB(userReview);

        if (!review) {
            res.status(400).json({error: 'Failed...'});
            return;
        }

        sendConfirmationEmail({
                    toEmail: req.body.email,
                    token: userReview.token,
                    fname: userReview.fname,
                    lname: userReview.lname,
                    type: 'review'
                });
        
        res.status(200).json({message: 'success', data: review})

    } catch (err) {
        console.error('Cannot save review to database:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

