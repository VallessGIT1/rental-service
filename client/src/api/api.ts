import axios from "axios"
import {BASE_API_URL} from "../const";
import toast from "react-hot-toast";

const apiClient = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  }
})

apiClient.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
)

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Произошла ошибка");
        }
      } else if (error.request) {
        toast.error("Нет ответа от сервера");
      } else {
        toast.error("Произошла неизвестная ошибка");
      }
      return Promise.reject(error);
    }
);

export default apiClient;