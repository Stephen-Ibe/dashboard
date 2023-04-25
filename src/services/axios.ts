import axios from "axios";

const instance = axios.create({
  baseURL: "https://fe-task-api.mainstack.io/",
  headers: {
    "Content-Type": "application/json",
  },
});

const successHandler = (response: any) => response;
const errorHandler = (error: any) => Promise.reject(error);

instance.interceptors.response.use(
  (response: any) => successHandler(response),
  (error: any) => errorHandler(error)
);

export default instance;
