import { AppError } from "@utils/AppError";
import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.15.10:3333",
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response && err.response.data) {
      return Promise.reject(new AppError(err.response.data.message));
    }

    return Promise.reject(err);
  }
);

export { api };
