import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
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
        unique: true,
        
    },
    Interess: {
        type: String,
        required: true,
    },
    message: {
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

export default model('Message', messageSchema)