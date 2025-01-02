

function ContactForm() {
  return (
    <form className="">
      <label htmlFor="fname">Vorname</label>
      <input type="text" className="" id="fname" name="fname" />
      <label htmlFor="lname">Nachname</label>
      <input type="text" className="" id="lname" name="lname" />
      <label htmlFor="email">Email</label>
      <input type="email" className="" id="email" name="email" />
      <label htmlFor="inter">Ich interessiete mich in....</label>
      <select name="inter" id="inter">
        <option></option>
        <option >Beratung von Teams</option>
        <option>Workshops</option>
        <option>Teambuilding</option>
      </select>
      <label htmlFor="msg">Nachrichten</label>
      <textarea name="msg" id="msg"></textarea>
      <button type="submit">Senden</button>
    </form>
  )
}

export default ContactForm
