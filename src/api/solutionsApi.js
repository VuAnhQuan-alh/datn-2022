import { axiosClient } from "./axiosClient";

const SolutionsAPI = {
  RunTest(id = "", data = {}) {
    const url = `/user/solutions/${id}`;
    return axiosClient.post(url, data);
  },
}

export default SolutionsAPI