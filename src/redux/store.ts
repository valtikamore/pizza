import {compose, createStore} from "redux";

import rootReducer from './reducers'

const store = createStore(rootReducer)

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

export default store
