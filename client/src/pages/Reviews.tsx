import '../components/reviews/Reviews.scss';

import Review from "../components/reviews/Review"
import { ReviewType } from '../types/main';

import { useContext, useEffect, useState } from 'react';
import { MainContext } from '../context/MainContext';
import ResponseMsg from '../components/common/ResponseMsg';
import { getReviews } from '../api/reviewsAPI';

function Reviews() {
  const [resMsg, setResMsg] = useState<boolean>(false);
  // const [reviews, setReviews ] = useState<ReviewType[] | null>(null);

  const context = useContext(MainContext);

  const openReviewForm = () => {
    context?.setIsWritingNewReview(true);
  }

    useEffect(() => {
        if (context && context.sendReview ) {
             setResMsg(true);
             if (context?.newReview) {
                // setReviews(prevReviews => [...(prevReviews || []), context.newReview!]);
                context?.setReviews(prevReviews => [...(prevReviews || []), context.newReview!]);
              }

         } else {
          setResMsg(false);
         }
    }, [context?.sendReview]);


    useEffect(() => {
      const fetchReviews = async () => {
        const data = await getReviews();
        if (data) {
          // setReviews(data);
          context?.setReviews(data);
        }
      }
      fetchReviews();
    }, [])



  return (
    <div className='reviews'>
      <div className="modal-wrap">
            {resMsg && <ResponseMsg />}
      </div>
      {!context?.reviews && <p className=''>Lade Bewertungen...</p>}
      {context?.reviews && context?.reviews.map((rev: ReviewType, ind: number) => <Review key={`review-${ind}`} rev={rev} />)}
      <button className='position-fixed bottom-4 end-4 fst-italic' onClick={() => openReviewForm()}><p>+</p></button>
    </div>
  )
}

export default Reviews
