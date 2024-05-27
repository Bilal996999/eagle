import axios from "axios";

const instance = axios.create({
    // baseURL: "http://localhost:7000"
    baseURL: "https://eagle-car-rental-backend.vercel.app"
    // baseURL: "https://eagle-car-rental-backend-iwoa-8auiow7at.vercel.app"
})

export default instance;