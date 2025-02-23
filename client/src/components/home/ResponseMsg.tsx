import { useContext } from "react"
import { MainContext } from "../../context/MainContext"

function ResponseMsg() {
    const context = useContext(MainContext);

    const handleClick = () => {
        context?.setSendedMsg(false);
    }
  return (
    <div className="modal">
        <div className="content">
            <h1>Danke schön</h1>
            <p>Klicken Sie auf den Link in der E-Mail, um Ihre Adresse zu bestätigen und Nachricht zu senden.</p>
            <button onClick={handleClick}>Ok</button>
        </div>
    </div>
  )
}

export default ResponseMsg
