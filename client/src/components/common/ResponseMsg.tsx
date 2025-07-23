import { useContext } from "react"
import { MainContext } from "../../context/MainContext"

function ResponseMsg() {
    const context = useContext(MainContext);

    const handleClick = () => {
        context?.setSendedMsg(false);
        context?.setSendReview(false);
    }

  return (
    <div className="modal">
        <div className="content">
            <h1 className="pb-2">Danke schön</h1>
            {context?.sendingStatus === null && <p>Schiken...</p>}
            {context?.sendingStatus && <p>Klicken Sie auf den Link in der E-Mail, um Ihre Adresse zu bestätigen und Nachricht zu senden.</p>}
            {context?.sendingStatus === false && <p>Hmmm...Etwas geht schlecht. Versuch bitte noch mal!</p>}
            {context?.sendingStatus !== null && <button className="resBtn" onClick={handleClick}>Ok</button>}
        </div>
    </div>
  )
}

export default ResponseMsg
