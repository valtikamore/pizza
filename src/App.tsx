import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Route } from 'react-router-dom';
import {Header} from './components'
import {Cart, Home} from "./pages";




function App() {
    const [pizzas, setPizzas] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            setPizzas(data.pizzas)
        })

        // fetch('http://localhost:3000/db.json')
        //     .then(resp => {
        //         console.log('fetch',resp)
        //        return  resp.json()
        //     })
        //     .then(json => setPizzas(json.pizzas))
    },[])

    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                   <Route path='/' exact render={() => <Home items={pizzas}/>} />
                   <Route path='/Cart' exact component={Cart} />
                </div>
            </div>
        </div>
    );
}

export default App;
