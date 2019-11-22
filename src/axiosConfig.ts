import axios from "axios";

import { onError } from "./utils/toasts";

const apiInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: { "Content-Type": "application/json; charset=UTF-8" },
});

apiInstance.interceptors.request.use(
  // Do something before request is sent
  (config) => config,
  // Do something with request error
  (error) => {
    onError();
    return Promise.reject(error);
  },
);

apiInstance.interceptors.response.use(
  // Do something with response data
  (response) => response,
  // Do something with response error
  (error) => {
    onError();
    return Promise.reject(error);
  },
);

export default apiInstance;
