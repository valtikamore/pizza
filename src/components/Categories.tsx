import React, {useEffect} from 'react';
import classNames from "classnames";
import { useDispatch, useSelector} from "react-redux";

import {allEndpoints} from "services";

import {fetchCategories, setSCategory} from "redux/actions/filters";
import {RootReducer} from "redux/reducers";


export const Categories = () => {
    const {categories, category} = useSelector((state: RootReducer) => state.filters)

    const onSelectItem = (index:number|null) => () => dispatch(setSCategory(index))

    const dispatch = useDispatch()

    useEffect(() => {
        allEndpoints.categories.getCategories().then(({data}) => {
            dispatch(fetchCategories(data.categories))
        })
    },[])


    const pizzaCategoriesMap = categories?.map((p,index) => {
       return <li
           className={classNames('', {
               'active' : category === index
           })}
           key={p.id}
           onClick={onSelectItem(index)}>{p.title}</li>
    })

    return (
        <div className="categories">
            <ul>
                <li
                    className={classNames('', {
                            'active' : category === null
                        })}
                    onClick={onSelectItem(null)}>All</li>
                {pizzaCategoriesMap}
            </ul>
        </div>
    );
};
