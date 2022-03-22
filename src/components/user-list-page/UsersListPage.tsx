import React from 'react'
import SideBar from '../sidebar/SideBar';
import Title from '../Title';
import UserCard from './UserCard';

export default function UsersListPage(): JSX.Element {
    return (
        <div className='page'>
            <SideBar />
            <div className="container">
                <Title title='Список пользователей'/>
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />

                <div className="users-counter">Найдено X результатов</div>
            </div>
        </div>
    )
}
