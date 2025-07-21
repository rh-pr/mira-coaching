import '../components/reviews/Reviews.scss';

import Review from "../components/reviews/Review"
import { ReviewType } from '../types/main';

import { reviews } from '../constants/main';
import { useContext, useEffect, useState } from 'react';
import { MainContext } from '../context/MainContext';
import ResponseMsg from '../components/common/ResponseMsg';

function Reviews() {
  const [resMsg, setResMsg] = useState<boolean>(false);

  const context = useContext(MainContext)

  const openReviewForm = () => {
    context?.setIsWritingNewReview(true);
  }

    useEffect(() => {
        if (context && context.sendReview ) {
             setResMsg(true) 
         } else {
          setResMsg(false);
         }
    }, [context?.sendReview]);

  return (
    <div className='reviews'>
      <div className="modal-wrap">
            {resMsg && <ResponseMsg />}
      </div>

      {reviews && reviews.map((rev: ReviewType, ind: number) => <Review key={`review-${ind}`} rev={rev} />)}
      <button onClick={() => openReviewForm()}><p>+</p></button>
    </div>
  )
}

export default Reviews
