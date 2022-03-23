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

export const setIsLoading = createAction(
    ActionTypes.SetIsLoading,
    (isLoading) => ({
        payload: {
            isLoading
        }
    })
)

export const sortByCity = createAction(ActionTypes.SortByCity)
export const sortByCompany = createAction(ActionTypes.SortByCompany)