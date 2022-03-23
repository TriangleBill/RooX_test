import { Link } from 'react-router-dom';
import { UserType } from '../../app/types';

type UserCardProps = {
    user: UserType
}

export default function UserCard({ user }: UserCardProps): JSX.Element {
    return (
        <div className='user-card'>
            <div className="user-card-field">
                <div className="user-card__title">ФИО:</div>
                <div>{user.name}</div>
            </div>
            <div className="user-card-field">
                <div className="user-card__title">город:</div>
                <div>{user.address.city}</div>
            </div>
            <div className="user-card-field">
                <div className="user-card__title">компания:</div>
                <div>{user.company.name}</div>
            </div>

            <Link to={`/user/${user.id}`} className="user-card__more-btn">Подробнее</Link>
        </div>
    )
}
