import React from 'react'
import { Link } from 'react-router-dom';

export default function UserCard(): JSX.Element {
    return (
        <div className='user-card'>
            <div className="user-card-field">
                <div className="user-card__title">ФИО:</div>
                <div>Иван Иванов</div>
            </div>
            <div className="user-card-field">
                <div className="user-card__title">город:</div>
                <div>Москва</div>
            </div>
            <div className="user-card-field">
                <div className="user-card__title">компания:</div>
                <div>ООО "Пример"</div>
            </div>

            <Link to={'/user/:id'} className="user-card__more-btn">Подробнее</Link>
        </div>
    )
}
