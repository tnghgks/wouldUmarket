import axios from "axios";
import { BASE_URL } from "../constant/Backend_URL";
import { getCookie } from "../lib/util/cookie";

export const defaultInstance = axios.create({
  baseURL: BASE_URL,
});

export const authInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export const formDataInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "multipart/form-data",
  },
});

authInstance.interceptors.request.use(
  (config) => {
    const token = getCookie("accessToken");

    config.headers["Authorization"] = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error)
);
