import axios from "axios";

function getToken() {
  const token = JSON.parse(window.localStorage.getItem("top-code"))?.token;
  return token;
}

export const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${getToken()}`
  }
})