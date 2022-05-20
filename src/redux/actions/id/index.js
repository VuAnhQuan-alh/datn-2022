import { ID_CHALLENGE, ID_USER } from "../../constants/id";

export const handleIdChallenge = (value, isActive) => dispatch => dispatch({ type: ID_CHALLENGE, id: value, active: isActive })
export const handleIdUser = (value, isActive) => dispatch => dispatch({ type: ID_USER, id: value, active: isActive })