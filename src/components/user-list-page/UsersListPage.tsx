import SideBar from '../sidebar/SideBar';
import Title from '../Title';
import UserCard from './UserCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { UserType } from '../../app/types'
import Loader from './../Loader';

export default function UsersListPage(): JSX.Element {
    const usersList = useSelector((state: RootState) => {
        const { rootReducer } = state
        return rootReducer.usersList
    })

    const isLoading = useSelector((state: RootState) => {
        const { rootReducer } = state
        return rootReducer.isLoading
    })

    const cardRender = (): JSX.Element => {
        if (isLoading) {
            return <Loader /> 
        }
        if (!usersList) {
            return <h1>Nothing found</h1>
        }

        return (
            <>
                {usersList.map((user: UserType, index) => (
                    <UserCard
                        user={user}
                        key={user.id + index + Date.now() + user.name}
                    />
                ))}
            </>
        )
    }

    return (
        <div className='page'>
            <SideBar />
            <div className="container">
                <Title title='Список пользователей' />
                {cardRender()}

                <div className="users-counter">Найдено {usersList.length} результатов</div>
            </div>
        </div>
    )
}
