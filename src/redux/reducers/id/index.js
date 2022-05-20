import { ID_CHALLENGE, ID_USER } from "../../constants/id"

const initialState = {
  id: null,
  active: false
}

const handle_id = (state = initialState, action) => {
  switch (action.type) {
    case ID_CHALLENGE:
    case ID_USER:
      return { ...state, id: action.id, active: action.active }
    default:
      return state
  }
}

export default handle_id