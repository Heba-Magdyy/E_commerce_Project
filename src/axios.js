import axios from "axios";

const proURL = axios.create({
    baseURL: "https://dummyjson.com/products"
});


export { proURL };
