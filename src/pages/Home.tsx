import React, { FC } from 'react';
import {Categories, SortPopup,PizzaBlock} from "../components";
import {v1} from "uuid";
import {IPizza} from "../models";

type Props = {
    items? : IPizza[]
};

 const Home: FC<Props> = ({items}) => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories/>
                <SortPopup  items={[
                        {name:'Popular',type:'popular'},
                        {name:'Price',type:'price'},
                        {name:'Alphabet',type:'alphabet'}]
                }/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items && items.map(i =>  <PizzaBlock
                    key={i.id}
                    {...i}
                />)}
            </div>
        </div>
    );
};
 export default Home

