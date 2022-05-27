import React from "react";
import { Link } from "react-router-dom";

import { Image, Button } from 'components'
import {Input} from "./Input";

import {useAppContext} from "hooks";

interface IProps {
}

export const Header:React.FC<IProps> = () => {

    const cartItems = 3
    const totalPrice = 3

    const {onChangeSearchPizza} = useAppContext()


    return (
        <div className="header">
            <div className="container">
                <Link to='/'>
                    <div className="header__logo">
                        <div>
                            <h1>React Pizza</h1>
                            <p>The most tasty pizza in the Universe</p>
                        </div>
                    </div>
                </Link>
                <Input
                    isSearch
                    placeholder={'Search pizza...'}
                    onChange={onChangeSearchPizza}
                />
                <Link to='/card'>
                    <Button className='button--cart'>
                        <span>{totalPrice}$</span>
                        <div className="button__delimiter"> </div>
                        <Image type={'cart'} />
                        <span>{cartItems}</span>
                    </Button>
                </Link>
            </div>
        </div>
        )
};
