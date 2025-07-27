import Main from "../components/home/Main"
import '../components/home/Home.scss';
import Offers from "../components/home/Offers";
import AboutMe from "../components/home/AboutMe";
import ReviewCard from "../components/home/ReviewCard";

import ContactForm from "../components/home/ContactForm";
import { useContext, useEffect } from "react";
import { MainContext } from "../context/MainContext";
import ResponseMsg from "../components/common/ResponseMsg";

import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { ReviewType } from "../types/main";
function Home() {
  const context = useContext(MainContext);

const controls = useAnimation();
 const [imgRef, inView] = useInView({ triggerOnce: true })
 const [formRef, inViewForm] = useInView({triggerOnce: true})

 const navigate = useNavigate();

 const reviews = context?.reviews ?? [];



 useEffect(() => {
  if (inView || inViewForm) {
    controls.start('visible')
  }
 }, [inView, controls, inViewForm])



  return (
    <div className='home' id="home" lang="de">
      <div className="modal-wrap">
         {context?.sendedMsg && <ResponseMsg/>}
      </div>
      <Main />
      <Offers />
      <AboutMe />
      { reviews.length > 0 && <div className="reviews-small">
        <p><h3>Bewertungen</h3></p>
        <div className={`d-flex ${reviews.length > 2 ? 'justify-content-around' : 'justify-contentt-start gap-5'}`}>{context?.reviews?.slice(0,3).map((review: ReviewType) =><ReviewCard rev={review} /> )}</div>
         <button className="nav-revs" onClick={() => navigate('/reviews')}>Mehr...</button>
      </div>}
      <div className="contact" id="contact">
        <motion.div 
          ref={formRef}
          initial='hidden'
          animate={controls}
          variants={{
            hidden: {opacity: 0, x: -100},
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 1.5}
            }

          }}
          className="form">
          <h3>Kontaktieren mit mir</h3>
          <ContactForm />
        </motion.div>
        <motion.div
          ref={imgRef}
          initial='hidden'
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 1.5 }
            }
          }}
          className="figure-wrap">
          <div  className="figure"></div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
