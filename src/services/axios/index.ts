import axios from "axios";

export const pizzaInstance = axios.create({
    baseURL: "https://628c8e3aa3fd714fd03467e7.mockapi.io",
});

export const localInstance = axios.create({
    baseURL: "http://localhost:3000",
});
