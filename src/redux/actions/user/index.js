import { UserAPI } from "../../../api";
import { GET_PROFILE, HANDLE_AUTH, UPDATE_PROFILE } from "../../constants/user";
import { resetStore } from "../../storeConfig/store";

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

export const handleSignUp = (data) => {
  return (dispatch) => {
    return UserAPI.Register(data)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          const data = response.data;
          const {
            user: { name, email, rank, score, is_admin, verified, _id, avatar },
            token,
          } = data;
          const local = {
            infoUser: {
              _id,
              name,
              email,
              rank,
              score,
              is_admin,
              avatar,
              verified,
            },
            token,
          };
          window.localStorage.setItem("top-code", JSON.stringify(local));
          dispatch({
            type: HANDLE_AUTH,
            data: local.infoUser,
            status: "success",
          });
        } else {
          dispatch({
            type: HANDLE_AUTH,
            data: {},
            status: "error",
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
      resetStore();
      window.localStorage.removeItem("top-code");
    });
  };
};

export const getRankBoard = () => {
  return (dispatch) => {
    return UserAPI.getRankBoard().then((response) => {
      if (response.status === 200) {
        const result = response.data.data;
        dispatch({
          type: "GET_RANK",
          data: result,
          status: "success",
        });
      }
    });
  };
};

export const userUpdateProfile = (data) => {
  return (dispatch) => {
    return UserAPI.updateProfile(data)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          dispatch({
            type: UPDATE_PROFILE,
            data: {},
            status: "success",
          });
        }
      })
      .catch(() => {
        dispatch({
          type: UPDATE_PROFILE,
          data: {},
          status: "error",
        });
      });
  };
};
