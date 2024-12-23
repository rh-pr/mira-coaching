

import me from '../../assets/img/mira.jpg';

function Main() {
  return (
    <div className='main'>
        <div className='text'>
        <h1>Unlock Your <br /> Potential with <br /> Expert Coaching</h1>
        <p>Unlock your potential with our professional coaching services, designed to enhance leadership
            skills and drive personal and organizational growth. Our expert coaches offer tailored strategies to 
            empower you to achieve your goals with confidence and precision.</p>
        <button className="btn bg-#0E5A2A fw-semibold text-white" type="submit">Kontaktieren</button>
        </div>
        <div className='img'>
        <img src={me} alt="me" />
        </div>
    </div>
  )
}

export default Main
