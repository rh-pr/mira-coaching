import { ReviewType } from '../../types/main';
import { motion } from 'framer-motion';

const emojies = [ '😠', '😔',  '😐', '😄', '🤗'];


function ReviewCard({rev}: {rev: ReviewType}) {
  return (
    <div className='review-card'>
       <div  className=" emoji-wrap">

            <motion.p 
              whileHover={{rotate: 360, scale: 1.2}}
              transition={{ duration: 1.5}}
              className='emoji'>{emojies[rev.note-1]}</motion.p>

       </div>
        <div className='stars'>
            {emojies.map((_, ind: number) => ind < rev.note ? <p key={`notes-${ind}`} className='star'>&#x2605;</p> : <p key={`notes-${ind}`} className='star'> &#x2606;</p>).reverse()}
        </div>
        <div className='initials'>
            <span>{rev.fname}</span>
            <span> {rev.lname}</span>
        </div>
        <div className='rev-cont'>
            <p>{rev.msg}</p>
        </div>
    </div>
  )
}

export default ReviewCard
