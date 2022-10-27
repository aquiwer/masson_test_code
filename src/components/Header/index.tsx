import classNames from 'classNames'

import './styles/style.css'

interface HeaderProps {
    isAuth: boolean
    setIsAuth: (payload: boolean) => void
}


const AuthHeader = ({setIsAuth}: Pick<HeaderProps, 'setIsAuth'>) => {
    return (
        <section className={classNames('header-auth-body')}>
            <div><h2 className={classNames('header-title')}>Masson</h2></div>
            <div><button onClick={() => setIsAuth(false)} className={classNames('header-button')}>Exit</button></div>
        </section>
    )
}

const UnAuthHeader = () => {
    return (
        <section>
            <p>Please login if u want to see a cute cat :3</p>
        </section>
    )
}
export const Header = ({isAuth, setIsAuth}: HeaderProps) => {
    return (
        <header className={classNames('header-wrapper')}>
            <section>
                {
                    isAuth ? <AuthHeader setIsAuth={setIsAuth}/> : <UnAuthHeader/>
                }
            </section>
        </header>
    )
}