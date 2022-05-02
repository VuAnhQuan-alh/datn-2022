import { axiosClient } from "./axiosClient";

const ChallengesAPI = {
  getChallenges() {
    try {
      const url = "/challenges";
      return axiosClient.get(url);
    } catch (error) {
      throw new Error(error);
    }
  },
  getChallengeUser() {
    try {
      const url = "/user/challenges";
      return axiosClient.get(url);
    } catch (error) {
      throw new Error(error)
    }
  },
  getDetailChallenge(id = "") {
    try {
      const url = `/user/detail-challenge/${id}`;
      return axiosClient.get(url);
    } catch (error) {
      throw new Error(error)
    }
  },
  createChallenge(data = {}) {
    try {
      const url = "/user/create-challenge";
      return axiosClient.post(url, data)
    } catch (error) {
      throw new Error(error)
    }
  },
  visibleChallenge(id = "") {
    try {
      // const url
    } catch (error) {
      throw new Error(error)
    }
  },
  updateChallenge(id = "", data = {}) {
    try {
      const url = `/user/update-challenge/${id}`
      return axiosClient.put(url, data)
    } catch (error) {
      throw new Error(error)
    }
  },
  runSolution(id = "", data = {}) {
    try {
      const url = `/user/solutions/${id}`
      return axiosClient.post(url, data)
    } catch (error) {
      throw new Error(error)
    }
  },
  submitChallenge(id = "", data = {}) {
    try {
      const url = `/user/submit/${id}`
      return axiosClient.post(url, data)
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default ChallengesAPI;