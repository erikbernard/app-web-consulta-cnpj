import axios from "axios";

const API_JS = axios.create({
    baseURL:"http://localhost:3333",
})
const API_RF = axios.create({
    baseURL:"https://www.receitaws.com.br/v1/cnpj/",
})
const baseURL = "https://www.receitaws.com.br/v1/cnpj/";
export {API_JS, API_RF,baseURL }