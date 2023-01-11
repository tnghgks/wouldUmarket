import axios from "axios";
import { getCookie } from "../cookie";

const BASE_URL = "https://mandarin.api.weniv.co.kr";

export const defaultInstance = axios.create({
  baseURL: BASE_URL,
});

export const authInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

authInstance.interceptors.request.use(
  (config) => {
    const token = getCookie("accessToken");

    if (!config.headers["Authorization"]) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);
