import { memo } from 'react'

type TitleProps = {
    title: string
}

function Title({title}: TitleProps): JSX.Element {
  return (
    <h1 className='title'>{title}</h1>
  )
}

export default memo(Title)
