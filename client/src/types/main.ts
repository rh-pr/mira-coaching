export type OffersCardType = {
    img: string,
    name: string,
    offers: string[]
}

export type ReviewType = {
    _id: string,
    fname: string, 
    lname: string,
    msg: string,
    email: string,
    eventLoc: string,
    radio: string,
    note: number,

}


export type KontaktDataType = {
    fname: string,
    lname: string,
    email: string,
    inter: string,
    msg: string
}


export type ContextType = {
    isWritingNewReview: boolean,
    setIsWritingNewReview: React.Dispatch<React.SetStateAction<boolean>>;
    sendedMsg: boolean,
    setSendedMsg: React.Dispatch<React.SetStateAction<boolean>>;
    sendReview: boolean
    setSendReview: React.Dispatch<React.SetStateAction<boolean>>;
    sendingStatus: boolean | null
    setSendingStatus: React.Dispatch<React.SetStateAction<boolean | null>>;
    newReview: ReviewType | null,
    setNewReview: React.Dispatch<React.SetStateAction<ReviewType | null>>;
    reviews: ReviewType[] | null,
    setReviews: React.Dispatch<React.SetStateAction<ReviewType[] | null>>;
}