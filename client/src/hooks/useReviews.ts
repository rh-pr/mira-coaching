import { useContext, useEffect } from 'react';
import { getReviews } from '../api/reviewsAPI';
import { MainContext } from '../context/MainContext';

export const useReviews = (
    setResMsg: (val: boolean) => void
 ) => {
  const context = useContext(MainContext);

  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     if (!context?.reviews) {
  //       const data = await getReviews();


  //       if (data) context?.setReviews(data.data);
  //     }
  //   };

  //   fetchReviews();
  // }, [context]);


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
};


