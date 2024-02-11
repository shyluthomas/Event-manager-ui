import axios from "axios";
import helpers, { tokenResponse } from "./helpers";

export const axiosNonAuth = axios.create();
const axiosAuth = axios.create();

axiosAuth.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization) {
      const tokenData: tokenResponse = helpers.getAuthToken();
      config.headers.Authorization = `Bearer ${tokenData.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosAuth;
