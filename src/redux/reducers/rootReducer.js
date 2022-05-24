// ** Redux Imports
import { combineReducers } from "redux";

// ** Reducers Imports
import auth from "./auth";
import navbar from "./navbar";
import layout from "./layout";
import {
  list_challenges,
  action_challenge,
  challenges_joined,
} from "./challenges";
import { user_reducers, rank_board, action_users } from "./users";
import handle_id from "./id";

const rootReducer = combineReducers({
  action_challenge,
  list_challenges,
  handle_id,
  challenges_joined,

  user_reducers,
  rank_board,
  action_users,

  auth,
  navbar,
  layout,
});

export default rootReducer;
