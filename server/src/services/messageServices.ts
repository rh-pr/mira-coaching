import { MessageInut } from "../types/message";
import  Message  from '../models/messageModel';
import { v4 as uuidv4 } from 'uuid';

export const saveMsgDB = async (userMsg: MessageInut) => {
   
    const doc = new Message( {
        fname: userMsg.fname,
        lname: userMsg.lname,
        email: userMsg.email,
        interess: userMsg.inter,
        message: userMsg.msg,
        token: uuidv4(),
        status: 'pending',
        createAt: new Date()
    });
    return  doc.save();
}

