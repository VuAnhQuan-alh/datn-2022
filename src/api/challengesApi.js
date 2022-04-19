import { axiosClient } from "./axiosClient";

const ChallengesAPI = {
  getChallenges(page = 1) {
    const url = `/challenges?page=${page}`;
    return axiosClient.get(url);
  },
  getChallengeNew() {
    const url = "/challenge-new";
    return axiosClient.get(url);
  },
  getDetailChallenge(id = "") {
    const url = `/user/detail-challenge/${id}`;
    return axiosClient.get(url);
  },
  createChallenge(data = {}) {
    const url = "/user/create-challenge";
    return axiosClient.post(url, data);
  },
}

export default ChallengesAPI;