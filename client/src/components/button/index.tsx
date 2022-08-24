import {ButtonHTMLAttributes} from "react";
import '../../scss/button.scss';

type ButtonProps = {
    text: string
    icon?: any
    children?: React.ReactNode
}

export const ButtonComponent = (props: ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps) => {

    return (
        <button
            onClick={props.onClick}
            name={props.name}
            type={props.type}
            {...props}
        >
            <span>{props.text}</span>
            {props.children && (
                <span id={'icon-span'}>{props.children}</span>
                )}
        </button>
    )
}