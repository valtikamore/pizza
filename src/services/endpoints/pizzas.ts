import axios from "../axios";
import {IPizza} from "../../models";

const endpoints = {
    getPizzas: () => axios.get<{pizzas:IPizza[]}>('/pizzas.json'),
};

export default endpoints;
