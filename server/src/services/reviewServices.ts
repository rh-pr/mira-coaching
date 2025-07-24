import Review from '../models/reviewsModel';
import { ReiviewInput } from '../types/review';
import {v4 as uuidv4} from 'uuid';

export const retriveReviewDB = async () => {
   return Review.find({
    status: 'confirmed'
   })
}

export const saveReviewDB = async (userReview: ReiviewInput ) => {
    const doc = new Review({
        fname: userReview.fname,
        lname: userReview.lname,
        email: userReview.email,
        know_from: userReview.eventLoc,
        emoji: userReview.radio,
        rate: userReview.note,
        review: userReview.msg,
        token: uuidv4(),
        status: 'pending',
        createAt: new Date()
    });

   return doc.save();
}