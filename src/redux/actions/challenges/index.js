import { ChallengesAPI } from "../../../api"
import { ADMIN_ACCEPT_CHALLENGE, ADMIN_GET_CHALLENGES, CREATE_A_CHALLENGE, DASHBOARD_GET_CHALLENGES, DELETE_SOLUTION, GET_A_CHALLENGE, RUN_SOLUTION, SUBMIT_CHALLENGE, USER_GET_CHALLENGES } from "../../constants/challenges"

const errorFormat = (type) => ({
  type: type,
  data: [],
  status: 'error'
})
const successFormat = (type, data) => ({
  type: type,
  data: data,
  status: 'success'
})

export const adminGetChallenges = () => {
  return dispatch => {
    return ChallengesAPI.adminGetChallenges()
      .then(response => {
        if (response.status === 200) {
          const result = response.data.data
          dispatch(successFormat(ADMIN_GET_CHALLENGES, result))
        }
      })
      .catch(() => {
        dispatch(errorFormat(ADMIN_GET_CHALLENGES))
      })
  }
}

export const adminAcceptChallenge = (id) => {
  return dispatch => {
    return ChallengesAPI.acceptChallenges(id)
      .then(response => {
        if (response.status === 200) {
          const result = response.data.data
          dispatch(successFormat(ADMIN_ACCEPT_CHALLENGE, result))
        }
      })
      .catch(() => {
        dispatch(errorFormat(ADMIN_ACCEPT_CHALLENGE))
      })
  }
}

export const userGetChallenges = () => {
  return dispatch => {
    return ChallengesAPI.userGetChallenges()
      .then(response => {
        if (response.status === 200) {
          const result = response.data.data
          dispatch(successFormat(USER_GET_CHALLENGES, result))
        }
      })
      .catch(() => {
        dispatch(errorFormat(USER_GET_CHALLENGES))
      })
  }
}

export const createAChallenge = (data) => {
  return dispatch => {
    return ChallengesAPI.createChallenge(data)
      .then(response => {
        if (response.status === 200) {
          const result = response.data.data.challengesNew
          dispatch(successFormat(CREATE_A_CHALLENGE, result))
        }
      })
      .catch(() => {
        dispatch(errorFormat(CREATE_A_CHALLENGE))
      })
  }
}

export const getAChallenge = (id) => {
  return dispatch => {
    return ChallengesAPI.getDetailChallenge(id)
      .then(response => {
        if (response.status === 200) {
          const result = response.data.data
          dispatch(successFormat(GET_A_CHALLENGE, result))
        }
      })
      .catch(() => {
        dispatch(errorFormat(GET_A_CHALLENGE))
      })
  }
}

export const dashboardGetChallenge = () => {
  return dispatch => {
    return ChallengesAPI.getChallengesInDashboard()
      .then(response => {
        if (response.status === 200) {
          const result = response.data.data.challengesNew
          dispatch(successFormat(DASHBOARD_GET_CHALLENGES, result))
        }
      })
      .catch(() => {
        dispatch(errorFormat(DASHBOARD_GET_CHALLENGES))
      })
  }
}

export const userRunSolution = (id, data) => {
  return dispatch => {
    return ChallengesAPI.runSolution(id, data)
      .then(response => {
        if (response.status === 200) {
          const result = response.data.data
          dispatch(successFormat(RUN_SOLUTION, result))
        }
      })
      .catch(() => {
        dispatch(errorFormat(RUN_SOLUTION))
      })
  }
}

export const userSubmitChallenge = (id, data) => {
  return dispatch => {
    return ChallengesAPI.submitChallenge(id, data)
      .then(response => {
        if (response.status === 200) {
          const result = response.data.data
          dispatch(successFormat(SUBMIT_CHALLENGE, result))
        }
      })
      .catch(() => {
        dispatch(errorFormat(SUBMIT_CHALLENGE))
      })
  }
}

export const userDeleteSolution = () => {
  return dispatch => {
    return dispatch(successFormat(DELETE_SOLUTION, []))
  }
}