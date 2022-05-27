import React, {InputHTMLAttributes} from "react";

import {Image} from 'components'

import styles from './styles.module.scss'
import classNames from "classnames";

interface IProps extends InputHTMLAttributes<HTMLInputElement>{
    isSearch?:boolean
}

export const Input:React.FC<IProps> = ({isSearch, onChange, ...rest}) => {
    return (
        <label className={classNames(styles.input, {
            [styles.searchInput] : isSearch
        }) }>
            <input type="text" onChange={onChange} {...rest}/>
            {isSearch && <Image type={'loop'}/>}
        </label>
    )
}
