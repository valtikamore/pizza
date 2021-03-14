import { createStore} from "redux";

import rootReducer from './reducers'
const win = window as any

const store = createStore(
    rootReducer ,
    win.__REDUX_DEVTOOLS_EXTENSION__ && win.__REDUX_DEVTOOLS_EXTENSION__(),
    )
win.store = store
export default store