import { useContext, useState } from "react";
import { MainContext } from "../context/MainContext"
import { sendMsg } from "../api/messageAPI";
import { messagePlaceholder } from "../constants/main";

export const useContactForm = () => {
    const [formData, setFormData] = useState(messagePlaceholder);
    const [formStatus, setFormStatus] = useState<boolean>(true);
    

    const context = useContext(MainContext);

    const handleUserMsg = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        setFormStatus(false);

        context?.setSendingStatus(null);
        context?.setSendedMsg(true);  

        const sendResponse = await sendMsg(formData);

        if (!sendResponse) {
        context?.setSendingStatus(false);
        } else {
        context?.setSendingStatus(true);
        setFormData(messagePlaceholder);
        }

        setFormStatus(true);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
        ...prevData,
        [name]: value
        }))
    }


    return {
        formStatus,
        formData,
        handleChange,
        handleUserMsg,
    }
}