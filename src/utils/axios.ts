import axios from "axios";

import { onError } from "./toasts";

const apiInstance = axios.create({
  baseURL: "/",
  headers: { "Content-Type": "application/json; charset=UTF-8" },
});

apiInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    onError();
    return Promise.reject(error);
  },
);

apiInstance.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response;
  },
  (error) => {
    // Do something with response error
    onError();
    return Promise.reject(error);
  },
);

export default apiInstance;
