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
          {/* <h1>Entfesseln Sie <br /> Ihr Potenzial  <br />  mit Experten-Coaching</h1> */}
          <h1>Entfesseln <br /> Sie Ihr Potenzial <br /> Experten-Coaching</h1>
          <p>Nutzen Sie unser professionelles Coaching, um Ihre Führungsfähigkeiten zu stärken
             und Ihr persönliches sowie organisationales Wachstum voranzutreiben. Unsere Coaches 
             bieten maßgeschneiderte Strategien, damit Sie Ihre Ziele selbstbewusst und präzise erreichen.</p>
          <button className="btn bg-#0E5A2A fw-semibold text-white" type="submit" onClick={() => scrollToForm()}>Kontaktieren</button>
        </motion.div>
        <motion.div className='img'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1}}
          transition={{ duration: 1.5}}>
         <motion.img src={me} alt="me foto coach" />
        </motion.div>
    </div>
  )
}

export default Main
