import axios from "axios";
import { BASE_URL } from "./config";

const apiService = axios.create({
    baseURL: BASE_URL,
});

apiService.interceptors.request.use(
    (request) => {
        console.log("Request:", request);
        return request;
    },
    (error) => {
        console.error("Request Error:", error);
        return Promise.reject(error);
    }
);

apiService.interceptors.response.use(
    (response) => {
        console.log("Response:", response);
        return response;
    },
    (error) => {
        console.error("Response Error:", error);
        return Promise.reject(error);
    }
);  

export default apiService;