import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

export const getProducts = () => axios.get(BASE_URL);