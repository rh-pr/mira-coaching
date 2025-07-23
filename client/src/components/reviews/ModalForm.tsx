import { emojies } from "../../constants/main";
import { useReviewForm } from "../../hooks/useReviewForm";

function ModalForm() {

   const {
    formData, 
    handleChange,
    handleReview,
    closeForm
   } = useReviewForm();

  return (
    <div className="modal-form ">
        <form className=""  onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleReview(e)}>
            <label htmlFor="fname" >Vorname</label>
            <input type="text" 
                   className="" 
                   id="fname" 
                   name="fname" 
                   required
                   value={formData.fname}
                   onChange={handleChange}/>
            <label htmlFor="lname">Nachname</label>
            <input type="text" 
                   className="" 
                   id="lname" 
                   name="lname" 
                   required
                   value={formData.lname}
                   onChange={handleChange}/>
            <label htmlFor="email">Email</label>
            <input type="email" 
                   className="" 
                   id="email" 
                   name="email" 
                   required
                   value={formData.email}
                   onChange={handleChange}/>
            <label htmlFor="eventLoc">Wo haben wir uns getroffen</label>
            <input type="text" 
                   className="" 
                   id="eventLoc" 
                   name="eventLoc" 
                   required
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
                      required
                      value={formData.msg}
                      onChange={handleChange}></textarea>
            <div className="btn">
                <button onClick={() => closeForm()}>Schließen</button>
                <button type="submit">Senden</button>
            </div>
           

        </form>
    </div>
  )
}

export default ModalForm
