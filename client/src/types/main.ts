export type OffersCardType = {
    img: string,
    name: string,
    offers: string[]
}

export type ReviewType = {
    id: string,
    note: number;
    fname: string, 
    lname: string,
    content: string
}

export type KontaktDataType = {
    fname: string,
    lname: string,
    email: string,
    title: string,
    msg: string
}

export type ContextType = {
    isWritingNewReview: boolean,
    setIsWritingNewReview: React.Dispatch<React.SetStateAction<boolean>>;
}