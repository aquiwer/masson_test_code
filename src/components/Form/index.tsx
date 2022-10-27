import { useState, MouseEvent, FormEvent } from "react"
import classNames from 'classNames'

import { FormValues } from "./types"

import './styles/style.css'

const { VITE_EMAIL, VITE_PASSWORD } = import.meta.env;


interface FormProps {
    onAuthHandler: (payload: boolean) => void
}
export const Form = ({ onAuthHandler }: FormProps) => {

    const [formValues, setFormValues] = useState<FormValues>({ email: '', password: '' })

    const onSubmitAction = <T extends MouseEvent | FormEvent,> (e: T): void => {
        e.preventDefault();
        if (formValues.email === VITE_EMAIL && formValues.password === VITE_PASSWORD) {
            onAuthHandler(true)
        }
    }

    return (
        <form className={classNames('form-container')} method='post' onSubmit={e => onSubmitAction(e)}>
            <h1 className={classNames('form-title')}>Get started</h1>
            <fieldset className={classNames('form-field-wrapper')}><input placeholder="Email" className={classNames('form-field')} type={'text'} onChange={e => setFormValues(prevState => ({ ...prevState, email: e.target.value }))} /></fieldset>
            <fieldset className={classNames('form-field-wrapper')}><input placeholder="Password" className={classNames('form-field')} type={'password'} onChange={e => setFormValues(prevState => ({ ...prevState, password: e.target.value }))} /></fieldset>
            <fieldset className={classNames('form-field-wrapper')}><button onClick={e => onSubmitAction(e)} className={classNames('form-button')}>Login</button></fieldset>
        </form>
    )
}