"use server";
import axios from "axios";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
  headers: {
    "Content-type": "application/json",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
});
console.log("API BASE URL:", process.env.NEXT_PUBLIC_BASE_API);
// Response Interceptor
http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error?.response?.data) return Promise.reject(error?.response?.data);
    return Promise.reject({ message: error.message });
  }
);

export default http;
