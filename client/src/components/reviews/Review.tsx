import { ReviewType } from '../../types/main';

function Review({rev}:{rev: ReviewType}) {
    const emojies = [ '😠', '😔',  '😐', '😄', '🤗'];


  return (
    <div className='review'>
        <p className='emoji'>{emojies[rev.note-1]}</p>
        <div className='content'>
            <p className='initial'>{rev.fname} {rev.lname}</p>
            <div className='stars'>
                {emojies.map((_, ind: number) => ind < rev.note ? <p key={`notes-${ind}`} className='star'>&#x2605;</p> : <p key={`notes-${ind}`} className='star'> &#x2606;</p>)}
            </div>
            <div className='rev-msg'>
                <p>{rev.content}</p>
            </div>
        </div>
    </div>
  )
}

export default Review
