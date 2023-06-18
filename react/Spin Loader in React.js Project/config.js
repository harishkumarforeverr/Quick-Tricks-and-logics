import Axios from "axios";
import USER_BASE_URL from "./config1";

// Import the library for showing/hiding the loader
import { showLoader, hideLoader } from "./utills/loaderUtils";

const CommonAxios = Axios.create({
  baseURL: USER_BASE_URL,
  headers: {
    "x-access-token": sessionStorage.getItem("token"),
    "Content-Type": "application/json",
    "userId":localStorage.getItem("HostId")
  },
});

CommonAxios.interceptors.request.use(
  (config) => {
    // Show the loader when the request starts
    showLoader();

    return config;
  },
  (error) => {
    hideLoader(); // Hide the loader in case of an error
    return Promise.reject(error);
  }
);

CommonAxios.interceptors.response.use(
  (response) => {
    // Hide the loader when the response is received
    hideLoader();

    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    hideLoader(); // Hide the loader in case of an error

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
  }
);

export default CommonAxios;
