import axios from "axios";
import history from "./history";

function getToken() {
  const token = JSON.parse(window.localStorage.getItem("top-code"))?.token;
  return token;
}

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL ?? "https://api.topcode.asia",
  headers: {
    "Content-Type": "application/json",
    post: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  },
  withCredentials: false,
});

axiosClient.interceptors.request.use(function (config) {
  config.headers.Authorization = "Bearer " + getToken();
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    // Nếu token hết hạn thì chuyển về trang login
    if (response.status === 401) {
      localStorage.removeItem("top-code");
      history.push("/login");
    }
    return response;
  },
  (e) => {
    return Promise.reject(e);
  }
);

export { axiosClient };
