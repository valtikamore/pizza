import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {RootReducer} from "redux/reducers";
import {requestPizzas, setPizzas, setPizzasFailure} from "redux/actions/pizzas";

import {Categories, PizzaCard, Skeleton, SortPopup} from "components";
import {useAppContext} from "hooks";

import {allEndpoints} from "services";
import {sortNames, sortValues} from "utils/constants";

import {Pagination} from "../components/Pagination";


interface IProps {

}

const Home:React.FC<IProps> = () => {
    const dispatch = useDispatch()
    const {searchPizzaValue} = useAppContext()

    const {items,error,isLoaded} = useSelector((state:RootReducer) => state.pizzas)
    const {category, sortBy} = useSelector((state:RootReducer) => state.filters)
    const [sortMethod, setSortMethod] = useState(sortNames.des);
    const [page,setPage] = useState(1)

    const onPageChange = (e:any) => setPage(e.selected + 1)

    const onSortChange = () =>  {
        if(sortMethod === sortNames.des) setSortMethod(sortNames.asc)
        if(sortMethod === sortNames.asc) setSortMethod(sortNames.des)
    }

    useEffect(()=> {
        dispatch(requestPizzas())
            allEndpoints.pizzas.getPizzas({category, sortBy, sortMethod,searchPizzaValue, page})
                .then(({data}) => {
                    dispatch(setPizzas(data))
                })
                .catch( (_) => {
                    dispatch(setPizzasFailure())
                })

    },[category,sortBy,sortMethod,searchPizzaValue,page])

    const pizzas = items.map((obj) => <PizzaCard key={obj.id} {...obj} />);
    const skeletons = [...new Array(10)].map((_, index) => <Skeleton key={index} />);

    return (
        <div className="container">
            <div className="content__top">
                <Categories/>
                <SortPopup
                    items={sortValues}
                    onSortChange={onSortChange}
                    sortMethod={sortMethod}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {!isLoaded ? skeletons : pizzas}
                {error}
            </div>
            <div style={{display:'flex', justifyContent: 'center'}}>
                <Pagination onPageChange={onPageChange}/>
            </div>

        </div>
    );
};

export default Home
