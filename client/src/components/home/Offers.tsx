import { useState, useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


import consultImg from '../../assets/img/prof/beratung.jpg';
import workshopImg from '../../assets/img/prof/workshop.jpg';
import teambuildImg from '../../assets/img/prof/team.jpeg';
import OffersCard from './OffersCard';
import { profOffers } from '../../constants/main';

const imags = [consultImg, workshopImg, teambuildImg];

function Offers() {
 const [openedIndex, setOpenedIndex] = useState<number | null>(null);
 
 const controls = useAnimation();
 const [ref, inView] = useInView({ triggerOnce: true })
 
 useEffect(() => {
  if (inView) {
    controls.start('visible')
  }
 }, [inView, controls])

  return (
    <div className="offers">
      <h1>Professionelle Unterstützung für Ihre Teams</h1>
      <div className={`offers-cards`}>
        {profOffers && profOffers.map((offer, ind) =>   
        <motion.div 
          key={`off-${ind}`}  
          className='offer-wrap'
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={{
            hidden: {opacity: 0, y: 60 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1.5, delay: (ind * 300 + 600) / 1000 }
            }
          }}>
              <OffersCard  data={{img: imags[ind], name: offer.name, offers: offer.offers}} 
                          isOpen = {openedIndex === ind}
                          showMore={() => setOpenedIndex(ind)}
                          hideMore={() => setOpenedIndex(null)} />
        </motion.div>
         )}
      </div>
    </div>
  )
}

export default Offers
