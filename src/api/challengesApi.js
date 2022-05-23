import { axiosClient } from "./axiosClient";

const ChallengesAPI = {
  adminGetChallenges() {
    try {
      const url = "/admin/challenges";
      return axiosClient.get(url);
    } catch (error) {
      throw new Error(error);
    }
  },
  acceptChallenges(id = "", data = {}) {
    try {
      const url = `/admin/accept-challenge/${id}`;
      return axiosClient.post(url, data);
    } catch (error) {
      throw new Error(error);
    }
  },
  userGetChallenges() {
    try {
      const url = "/user/challenges";
      return axiosClient.get(url);
    } catch (error) {
      throw new Error(error);
    }
  },
  getChallengesInDashboard() {
    try {
      const url = "/dashboard";
      return axiosClient.get(url);
    } catch (error) {
      throw new Error(error);
    }
  },

  // remove this api
  getChallengeUser() {
    try {
      const url = "/user/challenges";
      return axiosClient.get(url);
    } catch (error) {
      throw new Error(error);
    }
  },

  challengesInHome() {
    try {
      const url = "/challenges";
      return axiosClient.get(url);
    } catch (error) {
      throw new Error(error);
    }
  },
  getDetailChallenge(id = "") {
    try {
      const url = `/user/detail-challenge/${id}`;
      return axiosClient.get(url);
    } catch (error) {
      throw new Error(error);
    }
  },
  createChallenge(data = {}) {
    try {
      const url = "/user/create-challenge";
      return axiosClient.post(url, data);
    } catch (error) {
      throw new Error(error);
    }
  },

  updateChallenge(id = "", data = {}) {
    try {
      const url = `/user/update-challenge/${id}`;
      return axiosClient.put(url, data);
    } catch (error) {
      throw new Error(error);
    }
  },
  adminDeleteChallenge(id) {
    try {
      const url = `/admin/delete-challenge/${id}`;
      return axiosClient.delete(url);
    } catch (error) {
      throw new Error(error);
    }
  },
  runSolution(id = "", data = {}) {
    try {
      const url = `/user/solutions/${id}`;
      return axiosClient.post(url, data);
    } catch (error) {
      throw new Error(error);
    }
  },
  submitChallenge(id = "", data = {}) {
    try {
      const url = `/user/submit/${id}`;
      return axiosClient.post(url, data);
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default ChallengesAPI;
