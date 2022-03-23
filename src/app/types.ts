
export enum ActionTypes {
    SetUsers = 'SET_USERS',
    SetIsLoading = 'SET_IS_LOADING'
}

export type UserType = {
    id: number,
    name: string,
    userName: string,
    email: string,
    address: {
        street: string,
        city: string,
        zipcode: string
    },
    phone: string,
    sebsite: string,
    company: {
        name: string
    }
}