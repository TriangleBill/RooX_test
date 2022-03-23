import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sortByCity, sortByCompany } from './../../app/action';

type SprtBtnProps = {
    sortedBy: string
}

export default function SortBtn({ sortedBy }: SprtBtnProps): JSX.Element {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleClick() {
        if (sortedBy === 'city') {
            dispatch(sortByCity())
        } else {
            dispatch(sortByCompany())
        }

        navigate('/')
    }

    
    return (
        <button className='btn' onClick={handleClick}>
            {sortedBy == 'city' ? 'по городу' : 'по компании'}
        </button>
    )
}
