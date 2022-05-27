import React, {Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';


import {Header} from './components'

import {AppProvider} from "./providers/app.provider";

const Home = React.lazy(() => import('./pages/Home'))
const Cart = React.lazy(() => import('./pages/Cart'))

export const App = () => {
    return <div className="App">
        <div className="wrapper">
            <AppProvider>
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path={'/'} element={
                            <Suspense fallback={<h1>loading</h1>}>
                                <Home/>
                            </Suspense>}/>
                        <Route path={'/card'} element={<Cart/>}/>
                        <Route path={'*'} element={<div>not</div>}/>
                    </Routes>
                </div>
            </AppProvider>
        </div>
    </div>
};
