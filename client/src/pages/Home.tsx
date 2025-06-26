import Main from "../components/home/Main"
import '../components/home/Home.scss';
import Offers from "../components/home/Offers";
import AboutMe from "../components/home/AboutMe";
import ReviewCard from "../components/home/ReviewCard";

import { reviews } from '../constants/main'
import ContactForm from "../components/home/ContactForm";
import { useContext, useEffect } from "react";
import { MainContext } from "../context/MainContext";
import ResponseMsg from "../components/home/ResponseMsg";

import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
function Home() {
  const context = useContext(MainContext);

const controls = useAnimation();
 const [imgRef, inView] = useInView({ triggerOnce: true })
 const [formRef, inViewForm] = useInView({triggerOnce: true})

 useEffect(() => {
  if (inView || inViewForm) {
    controls.start('visible')
  }
 }, [inView, controls, inViewForm])

  return (
    <div className='home' id="home" lang="de">
      {/* {context?.sendedMsg && <ResponseMsg />} */}
      <div className="modal-wrap">
         {context?.sendedMsg && <ResponseMsg />}
      </div>
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
