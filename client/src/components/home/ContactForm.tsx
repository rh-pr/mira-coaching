import { useContext, useState } from "react";
import { MainContext } from "../../context/MainContext";
import ResponseMsg from "./ResponseMsg";

function ContactForm() {

  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false)
  // const [sendingStatus, setSendingStatus] = useState<boolean>(false);
  // const [openModal, setOpenModal] = useState<boolean>(false)

  const context = useContext(MainContext);

  const handleUserMsg = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    context?.setSendedMsg(true);

  }

  const taggleSelect = () => {
    setIsSelectOpen(!isSelectOpen);
  }
  

  return (
    <>
    <form className=""  onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleUserMsg(e)}>
      <label htmlFor="fname">Vorname</label>
      <input type="text" className="" id="fname" name="fname"  required/>
      <label htmlFor="lname">Nachname</label>
      <input type="text" className="" id="lname" name="lname" required />
      <label htmlFor="email">Email</label>
      <input type="email" className="" id="email" name="email" required />
      <label htmlFor="inter">Ich interessiete mich in....</label>
      <select name="inter" id="inter"  className={`${isSelectOpen ? 'opened-select' : 'closed-select'}`} onClick={() => taggleSelect()}>
        <option></option>
        <option onClick={() => taggleSelect()}>Beratung von Teams</option>
        <option onClick={() => taggleSelect()}>Workshops</option>
        <option onClick={() => taggleSelect()}>Teambuilding</option>
      </select>
      <label htmlFor="msg">Nachrichten</label>
      <textarea name="msg" id="msg" required></textarea>
      <button type="submit">Senden</button>
    </form>
    </>
  )
}

export default ContactForm
