import { UserAPI } from "../../../api";
import { DELETE_A_CHALLENGE } from "../../constants/challenges";
import { ID_USER } from "../../constants/id";
import { GET_PROFILE, HANDLE_AUTH, HANDLE_LOGOUT } from "../../constants/user";

export const getProfile = () => {
  return (dispatch) => {
    return UserAPI.getProfileUser()
      .then((response) => {
        if (response.status === 200) {
          const result = response.data;
          dispatch({
            type: GET_PROFILE,
            data: result,
            status: "success",
          });
        }
      })
      .catch(() => {
        dispatch({
          type: GET_PROFILE,
          data: {},
          status: "error",
        });
      });
  };
};

export const handleSignIn = (data) => {
  return (dispatch) => {
    return UserAPI.Login(data)
      .then((response) => {
        if (response.status === 200) {
          const local = response.data.data;
          window.localStorage.setItem("top-code", JSON.stringify(local));
          const result = response.data.data.infoUser;
          dispatch({
            type: HANDLE_AUTH,
            data: result,
            status: "success",
          });
        }
      })
      .catch(() => {
        dispatch({
          type: HANDLE_AUTH,
          data: {},
          status: "error",
        });
      });
  };
};

export const handleLogout = () => {
  return (dispatch) => {
    return UserAPI.handleLogout().then(() => {
      dispatch({
        type: HANDLE_LOGOUT,
        data: {},
        status: null,
      });
      dispatch({
        type: ID_USER,
        data: {},
        status: null,
      });
      dispatch({
        type: DELETE_A_CHALLENGE,
        data: {},
        status: null,
      });
      window.localStorage.removeItem("top-code");
    });
  };
};
