import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SideBar from '../sidebar/SideBar'
import Title from './../Title';
import ChangeBtn from './ChangeBtn';
import FormField from './FormField';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import Page404 from './../Page404';
import { fetchUser } from '../../app/asyncAction';
import Loader from './../Loader';
import { SetIsDisabled } from '../../app/action';
import { toast } from 'react-toastify';

export default function UserPage(): JSX.Element {
    const dispatch = useDispatch()
    const params = useParams<{ id?: string }>();
    const isLoading = useSelector((state: RootState) => {
        const { rootReducer } = state
        return rootReducer.isLoading
    })

    const idDisabled = useSelector((state: RootState) => {
        const { rootReducer } = state
        return rootReducer.isDisabled
    })

    const user = useSelector((state: RootState) => {
        const { rootReducer } = state
        return rootReducer.user
    })

    const [name, setName] = useState(user.name)
    const [userName, setUserName] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    const [street, setStreet] = useState(user.address.street)
    const [city, setCity] = useState(user.address.city)
    const [zipCode, setZipCode] = useState(user.address.zipcode)
    const [phone, setPhone] = useState(user.phone)
    const [website, setWebsite] = useState(user.website)

    useEffect(() => {
        dispatch(fetchUser(Number(params.id)))
        dispatch(SetIsDisabled(true))
    }, [params.id, dispatch])

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const data = {
            'name': name,
            'username': userName,
            "email": email,
            "address": {
                "street": street,
                "city": city,
                "zipcode": zipCode,
            },
            "phone": phone,
            "website": website,
        }

        try {
            await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            console.log(JSON.stringify(data));
            
        } catch (error) {
            toast.error(`Произошла ошибка при отправке данных: ${error}`)
        }

    }

    const renderReduslt = () => {
        if (!isLoading) {
            return (
                <div className="page">
                    <SideBar />
                    <div className="container">
                        <div className="user-page__header">
                            <Title title='Профиль пользователя' />
                            <ChangeBtn />
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="user-page__wrapper">
                                <FormField setData={setName} title={'Name'} type={'text'} value={user.name} />
                                <FormField setData={setUserName} title={'User name'} type={'userName'} value={user.username} />
                                <FormField setData={setEmail} title={'E-mail'} type={'email'} value={user.email} />
                                <FormField setData={setStreet} title={'Street'} type={'text'} value={user.address.street} />
                                <FormField setData={setCity} title={'City'} type={'text'} value={user.address.city} />
                                <FormField setData={setZipCode} title={'Zip code'} type={'zipCode'} value={user.address.zipcode} />
                                <FormField setData={setPhone} title={'Phone'} type={'tel'} value={user.phone} />
                                <FormField setData={setWebsite} title={'Website'} type={'url'} value={user.website} />
                                <div className="user-page__form-title">Comment</div>
                                <textarea className='user-page__form-comment' cols={30} rows={10} disabled={idDisabled}></textarea>
                            </div>

                            <input type="submit" className="btn btn-send" disabled={idDisabled} />
                        </form>
                    </div>
                </div>
            )
        } else {
            return (
                <Loader />
            )
        }
    }

    if (user.name == null) {
        return <Page404 />
    }

    return (
        <>
            {renderReduslt()}
        </>)
}
