import { ICategory } from "models";
import {localInstance} from "services/axios";


const endpoints = {
    getCategories: () => localInstance.get<{ categories: ICategory[] }>('/categories.json'),
}

export default endpoints;
