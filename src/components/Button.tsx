import React, {FC, FunctionComponent} from "react";
import classNames from 'classnames'

type ButtonPropsType = {
    text?: string
    test?:boolean
    outline?:boolean
    children?:any
    onClick?:() => void
    className:string
}

const  Button:FC<ButtonPropsType> = ({text,test,outline,children,onClick,className}) => {
    return (
        <button onClick={onClick}
                className={classNames('button', className, {
                    'button--outline': outline,
                })}> {children}</button>
    )
}

export default Button