import '../components/reviews/Reviews.scss';

import Review from "../components/reviews/Review"
import { ReviewType } from '../types/main';

import { reviews } from '../constants/main';
import { useContext } from 'react';
import { MainContext } from '../context/MainContext';

function Reviews() {

  const context = useContext(MainContext)

  const openReviewForm = () => {
    context?.setIsWritingNewReview(true);
  }

  return (
    <div className='reviews'>
      {reviews && reviews.map((rev: ReviewType, ind: number) => <Review key={`review-${ind}`} rev={rev} />)}
      <button onClick={() => openReviewForm()}><p>+</p></button>
    </div>
  )
}

export default Reviews
