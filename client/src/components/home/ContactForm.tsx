import { useContext, useState } from "react";
import { MainContext } from "../../context/MainContext"
import { sendMsg } from "../../api/messageAPI";
import { messagePlaceholder } from "../../constants/main";

function ContactForm() {

  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
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

  const taggleSelect = () => {
    setIsSelectOpen(!isSelectOpen);
  }
  

  return (
    <>
    <form className=""  onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleUserMsg(e)}>

      <div className="my-input-group">
        <label htmlFor="fname">Vorname</label>
        <input type="text" 
               id="fname" 
               name="fname" 
               required 
               value={formData.fname}
               onChange={handleChange} />
      </div>

     <div className="my-input-group">
        <label htmlFor="lname">Nachname</label>
        <input type="text" 
               id="lname" 
               name="lname" 
               required 
               value={formData.lname}
               onChange={handleChange} />
      </div>

      <div className="my-input-group">
        <label htmlFor="email">Email</label>
        <input type="email" 
               id="email" 
               name="email" 
               required
               value={formData.email} 
               onChange={handleChange}
               />
      </div>

      <div className="my-input-group">
        <label htmlFor="inter">Ich interessiete mich für....</label>
        <select name="inter" 
                id="inter" 
                className={`${isSelectOpen ? 'opened-select' : 'closed-select'}`} 
                onClick={taggleSelect}
                value={formData.inter}
                onChange={handleChange}
                >
          <option></option>
          <option onClick={() => taggleSelect()}>Beratung von Teams</option>
          <option onClick={() => taggleSelect()}>Workshops</option>
          <option onClick={() => taggleSelect()}>Teambuilding</option>
        </select>
      </div>

    <div className="my-input-group">
      <label htmlFor="msg">Nachrichten</label>
      <textarea name="msg" 
                id="msg" 
                required
                value={formData.msg}
                onChange={handleChange}>
      </textarea>
    </div>

      <button type="submit" 
              disabled={!formStatus} 
              className={`${!formStatus && 'bg-secondary'}`}>Senden</button>
    </form>
    </>
  )
}

export default ContactForm
