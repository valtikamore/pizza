import {pizzaInstance} from "../axios";
import {IPizza} from "../../models";

interface IFilter  {
    category: number
    sortBy: string
    sortMethod: string
    searchPizzaValue: string
    page: number
}

const endpoints = {
    getPizzas: (filters: IFilter) => pizzaInstance.get<IPizza[]>('/items', {
        params: {
            category: filters.category,
            sortBy: filters.sortBy === '' ? null : filters.sortBy,
            order: filters.sortMethod,
            filter: filters.searchPizzaValue ? filters.searchPizzaValue : null,
            page: filters.page,
            limit: '4'
        }
    })
};

export default endpoints;
