import { useContext, useEffect } from 'react';
// import { getReviews } from '../api/reviewsAPI';
import { MainContext } from '../context/MainContext';

export const useReviews = (
    setResMsg: (val: boolean) => void
 ) => {
  const context = useContext(MainContext);


  useEffect(() => {
        if (context && context.sendReview ) {
             setResMsg(true);
             if (context?.newReview) {
                context?.setReviews(prevReviews => [...(prevReviews || []), context.newReview!]);
              }

         } else {
          setResMsg(false);
         }
    }, [context?.sendReview]);
};


