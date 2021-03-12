import React from 'react';
import { Route } from 'react-router-dom';
import {Header} from './components'
import {Cart, Home} from "./pages";



function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                   <Route path='/' exact component={Home} />
                   <Route path='/Cart' exact component={Cart} />
                </div>
            </div>
        </div>
    );
}

export default App;
