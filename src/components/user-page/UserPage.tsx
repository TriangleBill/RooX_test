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

    useEffect(() => {
        dispatch(fetchUser(Number(params.id)))
        dispatch(SetIsDisabled(true))
    }, [params.id, dispatch])

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

                        <form>
                            <div className="user-page__wrapper">
                                <FormField title={'Name'} type={'text'} value={user.name} />
                                <FormField title={'User name'} type={'userName'} value={user.username} />
                                <FormField title={'E-mail'} type={'email'} value={user.email} />
                                <FormField title={'Street'} type={'text'} value={user.address.street} />
                                <FormField title={'City'} type={'text'} value={user.address.city} />
                                <FormField title={'Zip code'} type={'zipCode'} value={user.address.zipcode} />
                                <FormField title={'Phone'} type={'tel'} value={user.phone} />
                                <FormField title={'Website'} type={'url'} value={user.website} />
                                <div className="user-page__form-title">Comment</div>
                                <textarea className='user-page__form-comment' cols={30} rows={10} disabled={idDisabled}></textarea>
                            </div>

                            <input type="submit" className="btn btn-send" disabled={idDisabled}/>
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
