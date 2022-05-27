import React from 'react';
import {FC, useState} from "react";
import {useDispatch} from "react-redux";

import {setSortBy} from "../redux/actions/filters";

import {useOutBoardingClick} from "../hooks/useOutboadringClick";

import {Image} from 'components'

import {sortNames} from "../utils/constants";

type sortItems = {
    name:string
    type?:string
}

type SortPopupProps = {
    items:sortItems[]
    onSortChange: () => void
    sortMethod: string
};

export const SortPopup :FC<SortPopupProps> = ({items,sortMethod,onSortChange}) => {
    const dispatch = useDispatch()

    const [visiblePopup, setVisiblePopup] = useState<boolean>(false);
    const [activeItem, setActiveItem] = useState<number >(1);
    const {ref} = useOutBoardingClick(() => setVisiblePopup(false))


    const activeLabel = items[activeItem]

    const toggleVisiblePopUp = () => setVisiblePopup(!visiblePopup)

    const onSelectPopupItem = (index:number, type: string) => {
        setActiveItem(index)
        setVisiblePopup(false)
        dispatch(setSortBy(type))
    }

    const mapPopupItems = items?.map((i,index) => {
       return (
           <li
            key={index}
            className={activeItem === index ? 'active' : ''}
            onClick={() => onSelectPopupItem(index, i.type)}
           >
               {i.name}
           </li>
       )
    })

    return (
        <div className="sort" ref={ref}>
            <div className="sort__label">
                <Image type={'arrow'} className={visiblePopup ? 'rotated' : ''}/>
                <div onClick={toggleVisiblePopUp}>
                    <span> sort by: <span>{activeLabel.type}</span></span>
                </div>
            </div>
            <div onClick={onSortChange}>
                sorting by {sortMethod === sortNames.asc ? 'Ascending' : 'Des'}
            </div>
            {visiblePopup && (
                <div className="sort__popup">
                    <ul>{mapPopupItems}</ul>
                </div>
            )}
        </div>
    );
};


