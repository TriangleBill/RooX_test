import React from 'react'
import SortBtn from './SortBtn';

export default function SideBar(): JSX.Element {
  return (
    <div className='sidebar'>
        <h4 className='sidebar_title'>Сортировка</h4>

        <SortBtn sortedBy='city'/>
        <SortBtn sortedBy='company'/>
    </div>
  )
}
