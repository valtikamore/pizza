import {IPizza} from "../../models";

type initialStateType = {
   items:[] | IPizza[]
   isLoaded:boolean
   error: string
}

const initialState:initialStateType =  {
    items:[],
    isLoaded:false,
    error: ''
}
const pizzas = (state = initialState,action : any) => {
    switch (action.type) {
        case 'PIZZAS/SET_PIZZAS':
            return {
                ...state,
                items: [...state.items, ...action.payload],
                isLoaded: false,
                error: ''
            }
        case 'PIZZAS/REQUEST_PIZZAS' :
            return {
                ...state,
                isLoaded: true,
                error: ''
            }

        case 'PIZZAS/SET_PIZZAS_FAILURE':
            return {
                ...state,
                isLoaded: false,
                error: 'Loading error'
            }
        default: return state
    }
}

export default pizzas
