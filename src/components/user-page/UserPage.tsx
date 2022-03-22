import React from 'react'
import SideBar from '../sidebar/SideBar'
import Title from './../Title';
import ChangeBtn from './ChangeBtn';
import FormField from './FormField';

export default function UserPage(): JSX.Element {
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
                        <FormField title={'Name'} type={'text'} />
                        <FormField title={'User name'} type={'text'} />
                        <FormField title={'E-mail'} type={'email'} />
                        <FormField title={'Street'} type={'text'} />
                        <FormField title={'City'} type={'text'} />
                        <FormField title={'Zip code'} type={'number'} />
                        <FormField title={'Phone'} type={'tel'} />
                        <FormField title={'Website'} type={'url'} />
                        <div className="user-page__form-title">Comment</div>
                        <textarea className='user-page__form-comment' cols={30} rows={10}></textarea>
                    </div>

                    <input type="submit" className="btn btn-send" />
                </form>
            </div>
        </div>
    )
}
