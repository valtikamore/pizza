
type initialStateType = {
    categori:number
    sortBy:string
}

const initialState:initialStateType =  {
    categori:0,
    sortBy : 'popular'
}
const filters = (state = initialState,action : any) => {
    if(action.type === 'SET_SORT_BY') {
        return {
            ...state,
            sortBy: action.payload
        }
    }
    if(action.type === 'SET_CATEGORY') {
        return {
            ...state,
            categori: action.payload
        }
    }
    return state
}

export default filters