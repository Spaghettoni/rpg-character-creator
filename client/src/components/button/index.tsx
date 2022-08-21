import {ButtonHTMLAttributes} from "react";
import '../../scss/button.scss';

type ButtonProps = {
    text: string
}

export const ButtonComponent = (props: ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps) => {

    return (
        <button
            onClick={props.onClick}
            name={props.name}
            type={props.type}
        >
            {props.text}
        </button>
    )
}