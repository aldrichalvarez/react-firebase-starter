
import { USER_DATA, USER_ID } from "./actions";

const initialState = {
  userID: "",
  userData: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ID:
      return { ...state, userID: action.id };
    case USER_DATA:
      return { ...state, userData: action.data };
    default:
      return state;
  }
}

export default reducer;