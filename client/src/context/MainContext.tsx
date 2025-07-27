import { createContext, ReactNode, useEffect, useState } from 'react';
import { ContextType, ReviewType } from '../types/main';
import { getReviews } from '../api/reviewsAPI';

export const MainContext = createContext<ContextType | null>(null);

export const MainContextProvider = ({ children }: { children: ReactNode }) => {
	const [isWritingNewReview, setIsWritingNewReview] = useState<boolean>(false);
	const [sendedMsg, setSendedMsg] = useState<boolean>(false);
	const [sendReview, setSendReview] = useState<boolean>(false);
	const [sendingStatus, setSendingStatus] = useState<boolean | null>(null);
	const [newReview, setNewReview] = useState<ReviewType | null>(null);

	const [reviews, setReviews] = useState<ReviewType[] | null>(null);


	useEffect(() => {
    const fetchReviews = async () => {
      if (!reviews) {
        const data = await getReviews();


        if (data) setReviews(data.data);
      }
    };

    fetchReviews();
  }, []);

	return (
		<MainContext.Provider
			value={{
				isWritingNewReview,
                setIsWritingNewReview,
				sendedMsg,
				setSendedMsg,
				sendReview,
				setSendReview, 
				sendingStatus,
				setSendingStatus,
				newReview,
				setNewReview,
				reviews,
				setReviews,
			}}
		>
			{children}
		</MainContext.Provider>
	);
};