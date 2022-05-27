export const setSortBy = (type:string) => ({
    type:'FILTERS/SET_SORT_BY',
    payload: type
})

export const setSCategory = (catIndex:number) => ({
    type:'FILTERS/SET_CATEGORY',
    payload: catIndex
})

export const fetchCategories = (items:any) => ({
    type: 'FILTERS/SET_CATEGORIES',
    payload: items
})
