import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';


type FormFieldProps = {
    title: string,
    type: string,
    value: string
}

export default function FormField({ title, type, value }: FormFieldProps): JSX.Element {
    const idDisabled = useSelector((state: RootState) => {
        const { rootReducer } = state
        return rootReducer.isDisabled
    })

    const patternCreator = (): string => {
        switch (type) {
            case 'userName':
                return '[А-ЯA-Z][а-яa-z]+$'
            case 'text':
                return '^[А-Яа-я\s | A-Za-z\s]+$'
            case 'zipCode':
                return '[0-9 | -]+$'
            case 'tel':
                return '[+]?[0-9]{11}'
            default:
                return ''
        }
    }

    return (
        <div className='user-page__form-field'>
            <div className="user-page__form-title">{title}</div>
            {(type == 'email' || type == 'url') ?
                <input type={type} className="user-page__form-value" defaultValue={value} placeholder={title} disabled={idDisabled} required />
                :
                <input type='text' className="user-page__form-value" defaultValue={value} placeholder={title} disabled={idDisabled} required pattern={patternCreator()} />
            }
            {/* <input type='text' className="user-page__form-value" defaultValue={value} placeholder={title} disabled={idDisabled} required pattern='[0-9 | -]+$' /> */}
        </div>
    )
}
