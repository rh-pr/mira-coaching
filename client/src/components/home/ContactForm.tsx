import { useState } from "react";
import { useContactForm } from "../../hooks/useContactForm"

function ContactForm() {
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  
  const {
          formStatus,
          formData,
          handleChange,
          handleUserMsg,
      } = useContactForm();
    
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
                onClick={() =>  setIsSelectOpen(!isSelectOpen)}
                value={formData.inter}
                onChange={handleChange}
                >
          <option></option>
          <option>Beratung von Teams</option>
          <option>Workshops</option>
          <option>Teambuilding</option>
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
