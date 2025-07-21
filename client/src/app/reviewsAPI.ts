import { ReviewType } from '../types/main'

const baseUrl = import.meta.env.VITE_URL || 'http://localhost:3000/api';

export const sendReview = async (review: ReviewType) =>{
    try {
        return await fetch(`${baseUrl}/sendReview`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review)
        });

    } catch (err) {
        console.error('Error sendign reiview: ', err);
        return null
    }
}

export const getReviews = async () => {
    try {
        return await fetch (`${baseUrl}/getReviews`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (err) {
        console.error('Error fetching reviewsL ', err);
        return null;
    }
}