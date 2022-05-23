import {
  ADMIN_ACCEPT_CHALLENGE,
  ADMIN_GET_CHALLENGES,
  CREATE_A_CHALLENGE,
  DASHBOARD_GET_CHALLENGES,
  DELETE_A_CHALLENGE,
  DELETE_SOLUTION,
  GET_A_CHALLENGE,
  HOME_GET_CHALLENGES,
  RUN_SOLUTION,
  SUBMIT_CHALLENGE,
  USER_GET_CHALLENGES,
} from "../../constants/challenges";

const initialState = {
  data: [],
  status: null,
};

export const list_challenges = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_GET_CHALLENGES:
    case USER_GET_CHALLENGES:
    case GET_A_CHALLENGE:
    case DASHBOARD_GET_CHALLENGES:
    case HOME_GET_CHALLENGES:
      return { ...state, data: action.data, status: action.status };
    default:
      return state;
  }
};

export const action_challenge = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_ACCEPT_CHALLENGE:
    case CREATE_A_CHALLENGE:
    case RUN_SOLUTION:
    case SUBMIT_CHALLENGE:
    case DELETE_SOLUTION:
    case DELETE_A_CHALLENGE:
      return { ...state, data: action.data, status: action.status };
    default:
      return state;
  }
};
