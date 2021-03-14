import React, { FC } from 'react';
import {Categories, SortPopup,PizzaBlock} from "../components";
import {v1} from "uuid";


export type HomeItemsType = {
    id:number
    imageUrl:string
    name:string
    types:number[]
    sizes:number[]
    price:number
    category:number
    rating:number

}
type Props = {
    items : HomeItemsType[]
};
 const Home: FC<Props> = ({items}) => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={
                        [
                            {title: 'Meat', id: v1()},
                            {title: 'Vegetarian', id: v1()},
                            {title: 'Grill', id: v1()},
                            {title: 'Spicy', id: v1()},
                            {title: 'Closed', id: v1()},
                        ]
                    }/>
                <SortPopup  items={
                    [
                        {name:'Popular',type:'popular'},
                        {name:'Price',type:'price'},
                        {name:'Alphabet',type:'alphabet'}
                        ]
                }/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items.map(i =>  <PizzaBlock
                    key={i.id}
                    {...i}
                    // rating={i.rating}
                    // category={i.category}
                    // price={i.price}
                    // sizes={i.sizes}
                    // types={i.types}
                    // key={i.id}
                    // imageUrl={i.imageUrl}
                    // name={i.name}
                />)}
            </div>
        </div>
    );
};
 export default Home

