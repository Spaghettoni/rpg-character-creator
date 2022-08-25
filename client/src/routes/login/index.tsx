import {useLogin} from "./hooks";
import {InputComponent} from "../../components/input";
import {ButtonComponent} from "../../components/button";

export const Login = () => {
    const {onLogin, handleInput, email, error} = useLogin();

    return (
        <main>
            <section className={'container'}>

                <header>
                    <h2>Login page</h2>
                    <p>Enter your email below. If you do not have an account, you will automatically be registered.</p>
                </header>
                <form id='login-form' onSubmit={onLogin}>
                    <label>
                        Email:
                        <InputComponent
                            error={!!error ? 1 : 0}
                            type={'text'}
                            name={'email'}
                            value={email}
                            onChange={handleInput}
                            placeholder={'your@email.com'}
                            alt={'email-input'}
                            autoFocus
                        />
                        <span id={'email-error'}>{error}</span>
                    </label>
                    <ButtonComponent
                        id={'login-button'}
                        className={'heloooou'}
                        type={'submit'}
                        name={'login-button'}
                        text={'Login'}
                    />
                </form>
            </section>
        </main>
    );
}