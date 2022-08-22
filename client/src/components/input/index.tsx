import '../../scss/input.scss';
import {InputHTMLAttributes} from "react";

export const InputComponent = (props: InputHTMLAttributes<HTMLInputElement> & {error: boolean}) => {

    return (
        <input
            className={props.error ? 'has-error' : ''}
            {...props}
        />
    )
}