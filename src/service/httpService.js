import axios from "axios";
export const config = {
    baseURL: "https://restcountries.com/v3.1/",
    timeout: 0,
    headers: {},
};
export const axiosInstance = axios.create(config);
