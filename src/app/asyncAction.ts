
import { toast } from 'react-toastify';
import { setIsLoading, setUser, setUsers } from './action';

export function fetchUsers() {
    return async (dispatch: Function) => {
        dispatch(setIsLoading(true))
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const json = await response.json()
            dispatch(setUsers(json))
            dispatch(setIsLoading(false))
        } catch (error) {
            toast.error(`Ошибка при получении данных из сервера: ${error}`)
        }
    }
}

export function fetchUser(id: number) {
    return async (dispatch: Function) => {
        dispatch(setIsLoading(true))
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const json = await response.json()
            dispatch(setUser(json))
            dispatch(setIsLoading(false))
        } catch (error) {
            toast.error(`Ошибка при получении данных из сервера: ${error}`)
        }
    }
}