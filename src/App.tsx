import axios from 'axios';
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import {Header} from './components'
import {Cart, Home} from "./pages";
import {setPizzas } from "./redux/actions/pizzas";
import { useDispatch, useSelector} from 'react-redux'
import {allEndpoints} from "./services";
import {RootReducer} from "./redux/reducers";

function App () {

    const dispatch = useDispatch()

    const items = useSelector((state:RootReducer) => state.pizzas.items)

    useEffect(()=> {
        allEndpoints.pizzas.getPizzas().then(({data}) => {
            dispatch(setPizzas(data.pizzas))
        })
    },[])

    return <div className="App">
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Home
                    items={items}
                ></Home>
            </div>
        </div>
    </div>
}
export default App
