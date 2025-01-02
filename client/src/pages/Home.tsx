import Main from "../components/home/Main"
import '../components/home/Home.scss';
import Offers from "../components/home/Offers";
import AboutMe from "../components/home/AboutMe";
import ReviewCard from "../components/home/ReviewCard";

import formImg from '../assets/img/contact.jpg';


import { reviews } from '../constants/main'
import ContactForm from "../components/home/ContactForm";

function Home() {
  return (
    <div className='home' lang="de">
      <Main />
      <Offers />
      <AboutMe />
      <div className="reviews-small">
       {reviews[0] && <ReviewCard rev={reviews[0]} />}
       {reviews[1] && <ReviewCard rev={reviews[1]} />}
       {reviews[2] && <ReviewCard rev={reviews[2]} />}
       <button className="nav-revs">Mehr...</button>
      </div>
      <div className="contact">
        <div className="form">
          <h3>Kontaktieren mit mir</h3>
          <ContactForm />
        </div>
        <div className="figure"></div>
      </div>
      <div>dsjfkj</div>
    </div>
  )
}

export default Home
