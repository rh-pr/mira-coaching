import '../components/reviews/Reviews.scss';

import Review from "../components/reviews/Review"
import { ReviewType } from '../types/main';

import { useContext, useState } from 'react';
import { MainContext } from '../context/MainContext';
import ResponseMsg from '../components/common/ResponseMsg';
import { useReviews } from '../hooks/useReviews';

import LoadingAnimation from '../components/reviews/LoadAnimation';

function Reviews() {
  const [resMsg, setResMsg] = useState<boolean>(false);

  const context = useContext(MainContext);

  const openReviewForm = () => {
    context?.setIsWritingNewReview(true);
  }
    
  useReviews(setResMsg);

  return (
    <div className='reviews'>
      <div className="modal-wrap">
            {resMsg && <ResponseMsg />}
      </div>
      {!context?.reviews ?  <LoadingAnimation />:
       context?.reviews.map((rev: ReviewType, ind: number) => <Review key={`review-${ind}`} rev={rev} />)}
      <button className='position-fixed bottom-4 end-4 fst-italic' onClick={() => openReviewForm()}><p>+</p></button>
    </div>
  )
}

export default Reviews
