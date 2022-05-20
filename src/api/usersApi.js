import { axiosClient } from "./axiosClient";

const UserAPI = {
  Register(data = {}) {
    try {
      const url = "/user/register";
      return axiosClient.post(url, data);
    } catch (error) {
      throw new Error(error)
    }
  },
  Login(data = {}) {
    try {

      const url = "/user/login";
      return axiosClient.post(url, data);
    } catch (error) {
      throw new Error(error)
    }
  },
  getListUser() {
    try {
      const url = "/admin/list-user";
      return axiosClient.get(url);
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default UserAPI;