import axios from "axios";

function getToken() {
  const isLocal = JSON.parse(window.localStorage.getItem("top-code"))?.token;
  const token = isLocal ? isLocal : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjVjZDcyZTI3MTE3M2U2YzM5ZDM4ZTkiLCJpYXQiOjE2NTAyNTE1OTksImV4cCI6MTY1MDg1NjM5OX0.ZSROifRxxk2wTMeM6R6HDqGs6PhDHevxqst9JxZ7bZQ";
  return token;
}

export const axiosClient = axios.create({
  baseURL: "https://api.topcode.asia",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${getToken()}`
  }
})