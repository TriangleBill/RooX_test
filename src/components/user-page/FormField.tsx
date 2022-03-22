import React from 'react'

type FormFieldProps = {
    title: string, 
    type: string
}

export default function FormField({title, type}: FormFieldProps): JSX.Element {
    return (
        <div className='user-page__form-field'>
            <div className="user-page__form-title">{title}</div>
            <input type={type} className="user-page__form-value" defaultValue={'Value'} placeholder={title} />
        </div>
    )
}
