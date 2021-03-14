type initialStateType = {
   items:[]
    isLoaded:boolean
}

const initialState:initialStateType =  {
    items:[],
    isLoaded:false
}
const pizzas = (state = initialState,action : any) => {
    if(action.type === 'SET_PIZZAS') {
        return {
            ...state,
            items: action.payload,
        }
    }
    return state
}

export default pizzas