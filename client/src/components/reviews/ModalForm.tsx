import { useContext } from "react";
import { MainContext } from "../../context/MainContext";

function ModalForm() {
    const emojies = [ '😠', '😔',  '😐', '😄', '🤗'];

    const context = useContext(MainContext);

    const handleReview = () => {
        console.log('hi'); 
        context?.setSendReview(true);
        context?.setIsWritingNewReview(false);
    }

    const closeForm = () => {
        context?.setIsWritingNewReview(false);
    }

  return (
    <div className="modal-form ">
        <form className=""  onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleReview(e)}>
            <label htmlFor="fname">Vorname</label>
            <input type="text" className="" id="fname" name="fname" />
            <label htmlFor="lname">Nachname</label>
            <input type="text" className="" id="lname" name="lname" />
            <label htmlFor="email">Email</label>
            <input type="email" className="" id="email" name="email" />
            <label htmlFor="eventLoc">Wo haben wir uns getroffen</label>
            <input type="text" className="" id="eventLoc" name="eventLoc" />
            <label htmlFor="inter">Teile deine Erfahrung</label>
            {/* <InputGroup> */}
            <fieldset radioGroup="radio" className="radio-group">
                <input type="radio" name="radio" id="five" value={5} />
                <label htmlFor="five">{emojies[4]}</label>
                <input type="radio" name="radio" id="four" value={4} />
                <label htmlFor="four">{emojies[3]}</label>
                <input type="radio" name="radio" id="three" value={3} />
                <label htmlFor="three">{emojies[2]}</label>
                <input type="radio" name="radio" id="two" value={2} />
                <label htmlFor="two">{emojies[1]}</label>
                <input type="radio" name="radio" id="one" value={1} />
                <label htmlFor="one">{emojies[0]}</label>
            </fieldset>


            <label htmlFor="msg">Ihre Bewertung</label>
            <textarea name="msg" id="msg"></textarea>
            <div className="btn">
                <button type="submit" onClick={() => handleReview()}>Senden</button>
                <button onClick={() => closeForm()}>Schließen</button>
            </div>
           

        </form>
    </div>
  )
}

export default ModalForm
