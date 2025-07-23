import { useContext, useState } from "react";
import { MainContext } from "../../context/MainContext";
import { ReviewType } from "../../types/main";
import { addReview } from "../../api/reviewsAPI";
import { emojies, reviewPlaceholder } from "../../constants/main";


function ModalForm() {

    const [formData, setFormData ] = useState<ReviewType>(reviewPlaceholder);

    const context = useContext(MainContext);

    const handleReview = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        context?.setSendReview(true);
        context?.setIsWritingNewReview(false);

        const sendReview = await addReview(formData);

        if (!sendReview) {
            context?.setSendingStatus(false);
        } else {
            context?.setSendingStatus(true);
            setFormData(reviewPlaceholder);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const numericValue = e.target.name === 'note' ? parseInt(value) : 0;
    
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
            radio: emojies[numericValue - 1] 
        }));
    }

    const closeForm = () => {
        context?.setIsWritingNewReview(false);
    }

  return (
    <div className="modal-form ">
        <form className=""  onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleReview(e)}>
            <label htmlFor="fname" >Vorname</label>
            <input type="text" 
                   className="" 
                   id="fname" 
                   name="fname" 
                   value={formData.fname}
                   onChange={handleChange}/>
            <label htmlFor="lname">Nachname</label>
            <input type="text" 
                   className="" 
                   id="lname" 
                   name="lname" 
                   value={formData.lname}
                   onChange={handleChange}/>
            <label htmlFor="email">Email</label>
            <input type="email" 
                   className="" 
                   id="email" 
                   name="email" 
                   value={formData.email}
                   onChange={handleChange}/>
            <label htmlFor="eventLoc">Wo haben wir uns getroffen</label>
            <input type="text" 
                   className="" 
                   id="eventLoc" 
                   name="eventLoc" 
                   value={formData.eventLoc}
                   onChange={handleChange}/>
            <label htmlFor="inter">Teile deine Erfahrung</label>
            {/* <InputGroup> */}
            <fieldset radioGroup="note" 
                      className="radio-group">
                <input type="radio" 
                       name="note" 
                       id="five" 
                       value={5} 
                       onChange={handleChange}/>
                <label htmlFor="five">{emojies[4]}</label>
                <input type="radio" 
                       name="note" 
                       id="four" 
                       value={4} 
                       onChange={handleChange}/>
                <label htmlFor="four">{emojies[3]}</label>
                <input type="radio" 
                       name="note" 
                       id="three" 
                       value={3} 
                       onChange={handleChange}/>
                <label htmlFor="three">{emojies[2]}</label>
                <input type="radio" 
                       name="note" 
                       id="two" 
                       value={2} 
                       onChange={handleChange}/>
                <label htmlFor="two">{emojies[1]}</label>
                <input type="radio" 
                       name="note" 
                       id="one" 
                       value={1} 
                       onChange={handleChange}/>
                <label htmlFor="one">{emojies[0]}</label>
            </fieldset>


            <label htmlFor="msg">Ihre Bewertung</label>
            <textarea name="msg" 
                      id="msg"
                      value={formData.msg}
                      onChange={handleChange}></textarea>
            <div className="btn">
                <button type="submit">Senden</button>
                <button onClick={() => closeForm()}>Schließen</button>
            </div>
           

        </form>
    </div>
  )
}

export default ModalForm
