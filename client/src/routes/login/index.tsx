import {useLogin} from "./hooks";
import './styles.scss';
import {InputComponent} from "../../components/input";
import {ButtonComponent} from "../../components/button";

export const Login = () => {
    const {onLogin, handleInput, email, error} = useLogin();
    return (
        <main>
            <header>
                <h2>Login page</h2>
            </header>
            <section>
                <form onSubmit={onLogin}>
                    <label>Email:
                        <InputComponent
                            error={!!error}
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
                        type={'submit'}
                        name={'login-button'}
                        text={'Login'}
                    />
                </form>
            </section>
        </main>
    );
}