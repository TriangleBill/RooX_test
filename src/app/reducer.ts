import { createReducer } from "@reduxjs/toolkit"
import { SetIsDisabled, setIsLoading, setUser, setUsers, sortByCity, sortByCompany } from './action';
import { UserType } from "./types";


const initialState = {
    isLoading: false,
    usersList: [],
    isDisabled: true,
    user: {
        id: 1,
        name: '',
        username: '',
        email: '',
        address: {
            street: '',
            city: '',
            zipcode: ''
        },
        phone: '',
        website: '',
        company: {
            name: ''
        }
    }
}

export const rootReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setUsers, (state, action) => {
            const { users } = action.payload
            state.usersList = users
        })
        .addCase(setUser, (state, action) => {
            const { user } = action.payload
            state.user = user
        })
        .addCase(setIsLoading, (state, action) => {
            const { isLoading } = action.payload
            state.isLoading = isLoading
        })
        .addCase(SetIsDisabled, (state, action) => {
            const { isDisabled } = action.payload
            state.isDisabled = isDisabled
        })
        .addCase(sortByCity, (state, _action) => {
            if (state.usersList.length !== 0) {
                state.usersList.sort((a: UserType, b: UserType) => {
                    const cityA = a.address.city
                    const cityB = b.address.city
                    if (cityA < cityB) return -1
                    if (cityA > cityB) return 1
                    return 0
                })
            }
        })
        .addCase(sortByCompany, (state, _action) => {
            if (state.usersList.length !== 0) {
                state.usersList.sort((a: UserType, b: UserType) => {
                    const cityA = a.company.name
                    const cityB = b.company.name
                    if (cityA < cityB) return -1
                    if (cityA > cityB) return 1
                    return 0
                })
            }
        })
})