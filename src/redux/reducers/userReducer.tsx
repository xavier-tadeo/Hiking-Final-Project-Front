import actionTypes from "../actions/actionTypes";
import { IAction } from "./loginReducer";

const userReducer = (currentUser = {}, action: IAction) => {
  let newCurrentUser;
  switch (action.type) {
    case actionTypes.getUser:
      newCurrentUser = { ...action.user };

      break;

    default:
      newCurrentUser = currentUser;
  }

  return newCurrentUser;
};

export default userReducer;
