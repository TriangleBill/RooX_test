
import { toast } from 'react-toastify';
import { setIsLoading, setUsers } from './action';

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