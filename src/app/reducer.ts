import { createReducer } from "@reduxjs/toolkit"
import { setIsLoading, setUsers } from './action';


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
})