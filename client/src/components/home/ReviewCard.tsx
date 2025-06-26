import { ReviewType } from '../../types/main';
import { motion } from 'framer-motion';

const emojies = [ '😠', '😔',  '😐', '😄', '🤗'];


function ReviewCard({rev}: {rev: ReviewType}) {
  return (
    <div className='review-card hover:shadow-lg hover:shadow-gray-500/50'>
       <motion.div 
          className=" emoji-wrap">
            <motion.p 
              whileHover={{rotate: 360, scale: 1.2}}
              transition={{ duration: 1.5}}
              className='emoji'>{emojies[rev.note-1]}</motion.p>

               <motion.div
                  initial={{ scale: 0, opacity: 0.5 }}
                  whileHover={{ scale: 2.5, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute top-1/2 left-1/2 w-100 h-190 bg-green-300 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                />
       </motion.div>
        <div className='stars'>
            {emojies.map((_, ind: number) => ind < rev.note ? <p key={`notes-${ind}`} className='star'>&#x2605;</p> : <p key={`notes-${ind}`} className='star'> &#x2606;</p>).reverse()}
        </div>
        <div className='initials'>
            <span>{rev.fname}</span>
            <span> {rev.lname}</span>
        </div>
        <div className='rev-cont'>
            <p>{rev.content}</p>
        </div>
    </div>
  )
}

export default ReviewCard
