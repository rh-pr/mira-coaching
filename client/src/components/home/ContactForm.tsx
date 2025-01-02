import { useState } from "react";

function ContactForm() {

  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false)

  const handleUserMsg = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  }

  const taggleSelect = () => {
    setIsSelectOpen(!isSelectOpen);
  }

  return (
    <form className=""  onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleUserMsg(e)}>
      <label htmlFor="fname">Vorname</label>
      <input type="text" className="" id="fname" name="fname" />
      <label htmlFor="lname">Nachname</label>
      <input type="text" className="" id="lname" name="lname" />
      <label htmlFor="email">Email</label>
      <input type="email" className="" id="email" name="email" />
      <label htmlFor="inter">Ich interessiete mich in....</label>
      <select name="inter" id="inter"  className={`${isSelectOpen ? 'opened-select' : 'closed-select'}`} onClick={() => taggleSelect()}>
        <option></option>
        <option onClick={() => taggleSelect()}>Beratung von Teams</option>
        <option onClick={() => taggleSelect()}>Workshops</option>
        <option onClick={() => taggleSelect()}>Teambuilding</option>
      </select>
      <label htmlFor="msg">Nachrichten</label>
      <textarea name="msg" id="msg"></textarea>
      <button type="submit">Senden</button>
    </form>
  )
}

export default ContactForm
