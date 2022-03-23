
export enum ActionTypes {
    SetUsers = 'SET_USERS',
    SetUser = 'SET_USER',
    SetIsLoading = 'SET_IS_LOADING',
    SetIsDisabled = 'SET_IS_DISABLED',
    SortByCity = 'SORT_BY_CITY',
    SortByCompany = 'SORT_BY_COMPANY'
}

export type UserType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        city: string,
        zipcode: string
    },
    phone: string,
    website: string,
    company: {
        name: string
    }
}