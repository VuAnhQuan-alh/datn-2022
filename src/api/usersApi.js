import { axiosClient } from "./axiosClient";

const UserAPI = {
  Register(data = {}) {
    try {
      const url = "/user/register";
      return axiosClient.post(url, data);
    } catch (error) {
      throw new Error(error);
    }
  },
  Login(data = {}) {
    try {
      const url = "/user/login";
      return axiosClient.post(url, data);
    } catch (error) {
      throw new Error(error);
    }
  },
  handleLogout() {
    try {
      const url = "/user/logout";
      return axiosClient.get(url);
    } catch (error) {
      throw new Error(error);
    }
  },
  Logout() {
    try {
      console.log("Logout api");
      const url = "/user/logout";
      return axiosClient.get(url);
    } catch (error) {
      throw new Error(error);
    }
  },

  getListUser() {
    try {
      const url = "/admin/list-user";
      return axiosClient.get(url);
    } catch (error) {
      throw new Error(error);
    }
  },
  getProfileUser() {
    try {
      const url = "/user/profile";
      return axiosClient.get(url);
    } catch (error) {
      throw new Error(error);
    }
  },
  getRankBoard() {
    try {
      const url = "/rank";
      return axiosClient.get(url);
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default UserAPI;
