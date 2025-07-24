import { useEffect } from "react";
import { confirEmail } from '../api/confirmAPI';

const Confirmation = ()  => {

    useEffect(() => {
        const sendConfirmation = async() => {
            await confirEmail();
        }
        sendConfirmation();
    }, []);


  return (
    <p className="d-flex justify-content-center" style={{height: "70vh", paddingTop: '200px', fontWeight: 'bolder'}}>
      Sie haben erfolgreich ihre Email bestätigen! 
    </p>
  )
}

export default Confirmation
