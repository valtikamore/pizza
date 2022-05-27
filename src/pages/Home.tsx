import React, { useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {RootReducer} from "redux/reducers";
import {requestPizzas, setPizzas, setPizzasFailure} from "redux/actions/pizzas";

import {Categories, PizzaCard, Skeleton, SortPopup} from "components";
import {useAppContext, useInfinityScroll} from "hooks";

import {allEndpoints} from "services";
import {sortNames, sortValues} from "utils/constants";

interface IProps {

}

const Home:React.FC<IProps> = () => {
    const dispatch = useDispatch()
    const {searchPizzaValue} = useAppContext()
    const {loader,page} = useInfinityScroll()

    const {items,error,isLoaded} = useSelector((state:RootReducer) => state.pizzas)
    const {category, sortBy} = useSelector((state:RootReducer) => state.filters)
    const [sortMethod, setSortMethod] = useState(sortNames.des);


    const onSortChange = () =>  {
        if(sortMethod === sortNames.des) setSortMethod(sortNames.asc)
        if(sortMethod === sortNames.asc) setSortMethod(sortNames.des)
    }

    useEffect(()=> {
            allEndpoints.pizzas.getPizzas({category, sortBy, sortMethod,searchPizzaValue, page})
                .then(({data}) => {
                    // dispatch(requestPizzas())
                    dispatch(setPizzas(data))
                    // dispatch(requestPizzas())
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
                {isLoaded ? pizzas : skeletons}
                {error}
            </div>
            <div ref={loader} />
        </div>
    );
};

export default Home
