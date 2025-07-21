import { createContext, ReactNode, useState } from 'react';
import { ContextType } from '../types/main';

export const MainContext = createContext<ContextType | null>(null);

export const MainContextProvider = ({ children }: { children: ReactNode }) => {
	const [isWritingNewReview, setIsWritingNewReview] = useState<boolean>(false);
	const [sendedMsg, setSendedMsg] = useState<boolean>(false);
	const [sendReview, setSendReview] = useState<boolean>(false);
	const [sendingStatus, setSendingStatus] = useState<boolean | null>(null);

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
				setSendingStatus
			}}
		>
			{children}
		</MainContext.Provider>
	);
};