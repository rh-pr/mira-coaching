import { Model } from "mongoose";
import  Message  from "../models/messageModel";
import Reviews from "../models/reviewsModel";

export const updateStatusDB = async (token: string, type: 'message' | 'review') => {
     let record;

    if (type === 'message') {
        record = await Message.findOne({ token });
    } else if (type === 'review') {
        record = await Reviews.findOne({ token });
    } else {
        throw new Error('Invalid type');
    }

    if (!record) return null;

    record.status = 'confirmed';
    await record.save();

    return record;
}
