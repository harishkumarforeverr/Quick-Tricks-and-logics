import Axios from "axios";
import USER_BASE_URL from "./BaseUrl";
import { tokenKeyConstant } from "./utils";

export const CommonAxios = Axios.create({
  baseURL: USER_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

CommonAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(tokenKeyConstant);
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
CommonAxios.interceptors.response.use(
  (response) => {
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    if (error?.response?.status) {
      console.log("error?.response?.status", error?.response?.status);
      // eslint-disable-next-line default-case
      switch (error?.response?.status) {
        case 400:
          return error;
        case 401:
          return error;
        case 403:
          return error;

        case 404:
          return error;

        case 502:
          return error;
      }
      return Promise.reject(error.response);
    }
  },
);
