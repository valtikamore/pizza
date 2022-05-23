import React, {useEffect, useState} from 'react';
import classNames from "classnames";
import {ICategory} from "../models";
import {allEndpoints} from "../services";


const Categories = () => {
    const [activeItem, setActiveItem] = useState<number|null>(null);
    const [categories, setCategories] = useState<ICategory[] | []>([])

    const onSelectItem = (index:number|null) => () => setActiveItem(index)

    useEffect(() => {
        allEndpoints.categories.getCategories().then(({data}) => {
            //@ts-ignore
            setCategories(data.categories)
        })
    },[])

    const pizzaCategoriesMap = categories?.map((p,index) => {
       return <li
           className={classNames('', {
               'active' : activeItem === index
           })}
           key={p.id}
           onClick={onSelectItem(index)}>{p.title}</li>
    })

    return (
        <div className="categories">
            <ul>
                <li
                    className={classNames('', {
                            'active' : activeItem === null
                        })}
                    onClick={onSelectItem(null)}>All</li>
                {pizzaCategoriesMap}
            </ul>
        </div>
    );
};

export default Categories
