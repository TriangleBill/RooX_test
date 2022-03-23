import React from 'react'
import { useDispatch } from 'react-redux';
import { sortByCity, sortByCompany } from './../../app/action';

type SprtBtnProps = {
    sortedBy: string
}

export default function SortBtn({ sortedBy }: SprtBtnProps): JSX.Element {
    const dispatch = useDispatch()

    function handleClick() {
        if (sortedBy === 'city') {
            dispatch(sortByCity())
        } else {
            dispatch(sortByCompany())
        }
    }

    
    return (
        <button className='btn' onClick={handleClick}>
            {sortedBy == 'city' ? 'по городу' : 'по компании'}
        </button>
    )
}
