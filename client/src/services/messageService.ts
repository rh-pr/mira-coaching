import { sendMsg } from '../app/messageAPI';
import { KontaktDataType } from '../types/main';

export const sendFormData = async (formData: KontaktDataType) => {
    const data = await sendMsg(formData);
    if (!data) {
        return false;
    }
    return true;
}