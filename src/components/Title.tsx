import React from 'react'

type TitleProps = {
    title: string
}

export default function Title({title}: TitleProps): JSX.Element {
  return (
    <h1 className='title'>{title}</h1>
  )
}
