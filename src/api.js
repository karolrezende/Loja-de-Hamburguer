import axios from "axios";

export const hambApi = axios.create({
    baseURL: 'https://hamburgueria-kenzie-json-serve.herokuapp.com/products',
    timeout: 5000,
})