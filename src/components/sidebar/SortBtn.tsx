import React from 'react'

type SprtBtnProps = {
    sortedBy: string
}

export default function SortBtn({ sortedBy }: SprtBtnProps): JSX.Element {
    return (
        <button className='btn'>
            {sortedBy == 'city' ? 'по городу' : 'по компании'}
        </button>
    )
}
