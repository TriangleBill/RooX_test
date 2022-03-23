import { useDispatch } from 'react-redux';
import { SetIsDisabled } from '../../app/action';

export default function ChangeBtn():JSX.Element {
  const dispatch = useDispatch()

  function handleClick() {
    dispatch(SetIsDisabled(false))
  }

  return (
    <button className="btn" onClick={handleClick}>Редактировать</button>
  )
}
