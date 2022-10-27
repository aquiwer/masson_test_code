import { useState } from "react"
import classNames from 'classNames'

import { Form } from "./components/Form"
import { Header } from "./components/Header"

import './index.css'
export const App = () => {

    const [isAuth, setIsAuth] = useState(false)

    return (
        <>
            <Header isAuth={isAuth} setIsAuth={setIsAuth} />
            <main className={classNames('main-wrapper', {
                'main-wrapper-authed': isAuth
            })}>
               {
                !isAuth ?  <Form onAuthHandler={setIsAuth} /> : <h1 className={classNames('main-title')}>Hello, Massons!</h1>
               }
            </main>
        </>
    )
}