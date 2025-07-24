export interface Message {
    fname: string,
    lname: string,
    email: string,
    interess: string,
    message: string,
    token: string,
    status: string,
    createAt: Date
}

export interface MessageInut {
    fname: string,
    lname: string,
    email: string,
    inter: string,
    msg: string 
}