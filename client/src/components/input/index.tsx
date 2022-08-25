import '../../scss/input.scss';
import {InputHTMLAttributes} from "react";

export const InputComponent = (props: InputHTMLAttributes<HTMLInputElement> & {error?: number}) => {
    const {error} = props;
    return (
        <input
            className={error ? 'has-error' : ''}
            {...props}
        />
    )
}