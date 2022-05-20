// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import { list_challenges, action_challenge } from './challenges'
import handle_id from './id'

const rootReducer = combineReducers({
  action_challenge,
  list_challenges,
  handle_id,

  auth,
  navbar,
  layout,
})

export default rootReducer
