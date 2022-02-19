import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://bank-manage-ment-system.herokuapp.com/api/"
});

export default axiosInstance;