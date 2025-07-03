import { motion } from 'framer-motion';

import me from '../../assets/img/mira.jpg';
import { scrollToHash } from '../../utilits/scrollToHash';

function Main() {
  const scrollToForm = () => {
     setTimeout(() => {
        scrollToHash('contact')
          
  },100)
  }
  return (
    <div className='main'>
        <motion.div 
          className='text'
          initial={{ x: '-100%', opacity: 0 }}
          animate={{x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}>
          <h1>Unlock Your <br /> Potential with <br /> Expert Coaching</h1>
          <p>Unlock your potential with our professional coaching services, designed to enhance leadership
              skills and drive personal and organizational growth. Our expert coaches offer tailored strategies to 
              empower you to achieve your goals with confidence and precision.</p>
          <button className="btn bg-#0E5A2A fw-semibold text-white" type="submit" onClick={() => scrollToForm()}>Kontaktieren</button>
        </motion.div>
        <motion.div className='img'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1}}
          transition={{ duration: 1.5}}>
         <motion.img src={me} alt="me" />
        </motion.div>
    </div>
  )
}

export default Main
