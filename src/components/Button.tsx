import React from "react";
import classNames from 'classnames'

type ButtonPropsType = {
    outline?:boolean
    children?:any
    onClick?:() => void
    className:string
}

export const Button: React.FC<ButtonPropsType> = ({outline,children,onClick,className}) => {
    return (
        <button
            onClick={onClick}
            className={classNames('button', className, {
                    'button--outline': outline,
            })}
        >
            {children}
        </button>
    )
}
