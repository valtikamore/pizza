import { IPizza } from "../../models";

export const setPizzas = (items:IPizza[]) => ({
    type:'SET_PIZZAS',
    payload:items
})

