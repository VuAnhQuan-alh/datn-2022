import { axiosClient } from "./axiosClient";

const UserAPI = {
  Register(data = {}) {
    const url = "/user/register";
    return axiosClient.post(url, data);
  },
  Login(data = {}) {
    const url = "/user/login";
    return axiosClient.post(url, data);
  },
  getChallengeUser() {
    const url = "/user/challenges";
    return axiosClient.get(url);
  }
}

export default UserAPI;