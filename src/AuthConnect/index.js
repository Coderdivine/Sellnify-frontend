import axios from "axios";

export const AuthConnect = axios.create({
    baseURL:"http://localhost:4001/",
});