import { GET_PROFILE, HANDLE_AUTH, HANDLE_LOGOUT } from "../../constants/user";

const initialState = {
  data: {},
  status: null,
};

const user_reducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
    case HANDLE_AUTH:
    case HANDLE_LOGOUT:
      return {
        ...state,
        data: action.data,
        status: action.status,
      };
    default:
      return state;
  }
};

export default user_reducers;
