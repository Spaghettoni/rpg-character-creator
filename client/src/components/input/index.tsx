import '../../scss/input.scss';
import {InputHTMLAttributes} from "react";

export const InputComponent = (props: InputHTMLAttributes<HTMLInputElement> & {error: boolean}) => {

    return (
        <input
            className={props.error ? 'has-error' : ''}
            type={props.type}
               name={props.name}
               value={props.value}
               onChange={props.onChange}
               placeholder={props.placeholder}
               alt={props.alt}
               autoFocus
        />
    )
}