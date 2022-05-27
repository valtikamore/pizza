type initialStateType = {
    category:number | null
    sortBy:string
    categories: []
}

const initialState:initialStateType =  {
    category: null ,
    sortBy : 'price',
    categories: []
}

const filters = (state = initialState,action : any) => {
    switch (action.type) {
        case 'FILTERS/SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload
            }
        case 'FILTERS/SET_CATEGORY':
            return {
                ...state,
                category: action.payload
            }
        case 'FILTERS/SET_CATEGORIES' :
            return {
                ...state,
                categories: action.payload
            }
        default: return state
    }
}

export default filters
