import { ReviewType } from '../types/main'
import { reviews } from '../constants/main';

const baseUrl = import.meta.env.VITE_URL || 'http://localhost:3000/api';

export const addReview = async (review: ReviewType) =>{
    try {
        return await fetch(`${baseUrl}/reviews/postReview`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review)
        });

    } catch (err) {
        console.error('Error sendign reiview: ', err);
        return null;
    }
}

export const getReviews = async () => {
    try {
        const data =  await fetch (`${baseUrl}/reviews`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!data) {
            throw Error('Error fetching reviews: ');
        }

        return data.json();
        
    } catch (err) {
        console.error('Error fetching reviews: ', err);
        // return null;
        return reviews;
    }
}