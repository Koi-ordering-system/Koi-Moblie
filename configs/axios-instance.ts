import { env } from "@/lib/env";
import axios from "axios";

export const baseURL = env.EXPO_PUBLIC_API_URL_BE;

export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
  timeout: 3000,
});

axiosInstance.interceptors.request.use();

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);
