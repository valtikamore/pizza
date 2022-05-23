import { ICategory } from "models";
import axios from "services/axios";


const endpoints = {
    getCategories: () => axios.get<{pizzas:ICategory[]}>('/categories.json'),
};

export default endpoints;
