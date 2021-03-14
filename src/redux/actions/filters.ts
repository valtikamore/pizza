

export const setSortBy = (name:string) => ({
    type:'SET_SORT_BY',
    payload:name
})

export const setSCategory = (catIndex:number) => ({
    type:'SET_CATEGORY',
    payload:catIndex
})