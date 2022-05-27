import {compose, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers'

const store = createStore(rootReducer, composeWithDevTools())

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

export default store
