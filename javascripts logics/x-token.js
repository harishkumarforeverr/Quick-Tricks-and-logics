

const asyncLocalStorage = {
  setItem: function (key, value) {
    return Promise.resolve().then(function () {
      localStorage.setItem(key, value);
    });
  },
  getItem: function (key) {
    return Promise.resolve().then(function () {
      return localStorage.getItem(key);
    });
  },
};



        await asyncLocalStorage.setItem("x-token", res.data.data.token);



















import axios from "axios";
import { baseUrl } from "./config1";

const Axiosinstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

Axiosinstance.interceptors.request.use(
  (config) => {
    console.log("config", config.headers);
    config.headers["x-auth"] = localStorage.getItem("auth");
    config.headers["x-token"] = localStorage.getItem("x-token");
    config.headers["access-control-allow-origin"] = "*";
    return config;
  },
  (error) => {
    // Promise.reject(error)
  }
);

Axiosinstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.message === "Network Error" && !error.response) {
      console.log("network error");
    }
    const { status, data, config } = error.response;
    console.log("Network>>>kkkkstatus", status);

    if (status === 401) {
      // createBrowserHistory().push('/');
      // window.location.reload();
      // localStorage.clear()
      //  localStorage.clear()
    }
    if (
      status === 400 &&
      config.method === "get" &&
      data.errors.hasOwnProperty("id")
    ) {
    }
    if (status === 500) {
      console.log("Network>>>kkkkstatus", status);
    }
    return error.response;
  }
);

export default Axiosinstance;









// for logout 
 localStorage.clear();
