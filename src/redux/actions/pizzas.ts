import { IPizza } from "../../models";

export const requestPizzas = () => ({
    type:'PIZZAS/REQUEST_PIZZAS',
})

export const setPizzas = (items:IPizza[]) => ({
    type:'PIZZAS/SET_PIZZAS',
    payload:items
})

export const setPizzasFailure = () => ({
    type:'PIZZAS/SET_PIZZAS_FAILURE',
})
