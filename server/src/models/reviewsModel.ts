import { required } from 'joi';
import { Schema, model } from 'mongoose';

const reviewsSchema = new Schema({
    fname:{
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        require: true,
        
    },
    know_from: {
        type: String,
        required: true,
    },

    emoji: {
        type: String,
        required: true,
    },

    rate: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    review: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true,
        unique: true,
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed'], 
        default: 'pending',
    },
    createAt: {
        type: Date,
        default: Date.now,
    }

});

export default model('Reviews', reviewsSchema)