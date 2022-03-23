import { createAction } from "@reduxjs/toolkit";
import { ActionTypes } from "./types";

export const setUsers = createAction(
    ActionTypes.SetUsers,
    (users) => ({
        payload: {
            users
        }
    })
)

export const setUser = createAction(
    ActionTypes.SetUser,
    (user) => ({
        payload: {
            user
        }
    })
)

export const setIsLoading = createAction(
    ActionTypes.SetIsLoading,
    (isLoading) => ({
        payload: {
            isLoading
        }
    })
)

export const SetIsDisabled = createAction(
    ActionTypes.SetIsDisabled,
    (isDisabled) => ({
        payload: {
            isDisabled
        }
    })
)

export const sortByCity = createAction(ActionTypes.SortByCity)
export const sortByCompany = createAction(ActionTypes.SortByCompany)