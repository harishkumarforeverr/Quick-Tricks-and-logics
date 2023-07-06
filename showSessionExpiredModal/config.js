import Axios from "axios";
import { Diagnosisbaseurl } from "./BaseUrl";
import API_URL_CONSTANTS from "./constants/apiEndpoints";
import { baseUrl } from "./BaseUrl";
import { showSessionExpiredModal } from "./utills/SessionExpiredModal";
const {
  CAREGIVER_BASE_URL,
  USER_BASE_URL,
  TELEHEALTH_BASEURL_URL,
  SENIORCARE_BASEURL_URL,
  COMMON_BASE_URL,
} = API_URL_CONSTANTS;

export const TelehealthAxios = Axios.create({
  baseURL: TELEHEALTH_BASEURL_URL, //"http://15.207.165.218:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

TelehealthAxios.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("access_token");
    // if (token) {
    //   config.headers.common["Authorization"] = token;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
TelehealthAxios.interceptors.response.use(
  (response) => {
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    if (error?.response?.status) {
      switch (error.response.status) {
        case 400:
          //do something
          break;

        case 401:
          // alert("session expired");
          break;
        case 403:
          // router.replace({
          //   path: "/login",
          //   query: { redirect: router.currentRoute.fullPath }
          // });
          break;
        case 404:
          // alert('page not exist');
          break;
        case 502:
          setTimeout(() => {
            //   router.replace({
            //     path: "/login",
            //     query: {
            //       redirect: router.currentRoute.fullPath
            //     }
            //   });
          }, 1000);
      }
      return Promise.reject(error.response);
    }
  }
);

export const CaregiversAxios = Axios.create({
  baseURL: CAREGIVER_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

CaregiversAxios.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("access_token");
    // if (token) {
    //   config.headers.common["Authorization"] = token;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
CaregiversAxios.interceptors.response.use(
  (response) => {
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    if (error?.response?.status) {
      switch (error.response.status) {
        case 400:
          //do something
          break;

        case 401:
          // alert("session expired");
          break;
        case 403:
          // router.replace({
          //   path: "/login",
          //   query: { redirect: router.currentRoute.fullPath }
          // });
          break;
        case 404:
          // alert('page not exist');
          break;
        case 502:
          setTimeout(() => {
            //   router.replace({
            //     path: "/login",
            //     query: {
            //       redirect: router.currentRoute.fullPath
            //     }
            //   });
          }, 1000);
      }
      return Promise.reject(error.response);
    }
  }
);

export const SeniorCareAxios = Axios.create({
  baseURL: SENIORCARE_BASEURL_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

SeniorCareAxios.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("access_token");
    // if (token) {
    //   config.headers.common["Authorization"] = token;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
SeniorCareAxios.interceptors.response.use(
  (response) => {
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    if (error.response.status) {
      switch (error.response.status) {
        case 400:
          //do something
          break;

        case 401:
          // alert("session expired");
          break;
        case 403:
          // router.replace({
          //   path: "/login",
          //   query: { redirect: router.currentRoute.fullPath }
          // });
          break;
        case 404:
          // alert('page not exist');
          break;
        case 502:
          setTimeout(() => {
            //   router.replace({
            //     path: "/login",
            //     query: {
            //       redirect: router.currentRoute.fullPath
            //     }
            //   });
          }, 1000);
      }
      return Promise.reject(error.response);
    }
  }
);

export const CommonAxios = Axios.create({
  baseURL: USER_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

CommonAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    config.headers["x-token"] = localStorage.getItem("x-token");
    config.headers["userId"] = localStorage.getItem("userId");
    if (token) {
      config.headers.common["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
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
      if (error?.response?.status == 401) {
        showSessionExpiredModal();
      }
      // eslint-disable-next-line default-case
      switch (error?.response?.status) {
        case 400:
          return error;
        case 401:
          return error;
        case 403:
          return error;
        case 401:
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
export const DiagnosisAxios = Axios.create({
  baseURL: Diagnosisbaseurl,
  headers: {
    "Content-Type": "application/json",
  },
});

DiagnosisAxios.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("access_token");
    // if (token) {
    //   config.headers.common["Authorization"] = token;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
DiagnosisAxios.interceptors.response.use(
  (response) => {
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    if (error.response.status) {
      // eslint-disable-next-line default-case
      switch (error.response.status) {
        case 400:
          //do something
          break;

        case 401:
          // alert("session expired");
          break;
        case 403:
          // router.replace({
          //   path: "/login",
          //   query: { redirect: router.currentRoute.fullPath }
          // });
          break;
        case 404:
          // alert('page not exist');
          break;
        case 502:
          setTimeout(() => {
            //   router.replace({
            //     path: "/login",
            //     query: {
            //       redirect: router.currentRoute.fullPath
            //     }
            //   });
          }, 1000);
      }
      return Promise.reject(error.response);
    }
  }
);
// https://user.uborahealth.info/api

export default baseUrl;
