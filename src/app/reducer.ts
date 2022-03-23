import { createReducer } from "@reduxjs/toolkit"
import { setIsLoading, setUsers, sortByCity, sortByCompany } from './action';
import { UserType } from "./types";


const initialState = {
    isLoading: false,
    usersList: []
}

export const rootReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(setUsers, (state, action) => {
        const {users} = action.payload
        state.usersList = users
    })
    .addCase(setIsLoading, (state, action) => {
        const {isLoading} = action.payload
        state.isLoading = isLoading
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