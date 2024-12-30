import { ReviewType } from '../../types/main';

const emojies = [ '😠', '😔',  '😐', '😄', '🤗'];


function ReviewCard({rev}: {rev: ReviewType}) {
  return (
    <div className='review-card'>
        <p className='emoji'>{emojies[rev.note-1]}</p>
        <div className='stars'>
            {emojies.map((_, ind: number) => ind < rev.note ? <p key={`notes-${ind}`} className='star'>&#x2605;</p> : <p key={`notes-${ind}`} className='star'> &#x2606;</p>)}
        </div>
        <div className='initials'>
            <span>{rev.fname}</span>
            <span> {rev.lname}</span>
        </div>
        <div className='rev-cont'>
            <span className='mark'>"</span>
            <p className='cont'>{rev.content}</p>
            <span className='mark mark-end'>"</span>
        </div>
    </div>
  )
}

export default ReviewCard
