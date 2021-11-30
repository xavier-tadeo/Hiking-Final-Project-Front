import actionsTypes from "../actions/actionTypes";

export interface IAction {
  type: String;
  user: Object;
  hike: Array<Object>;
}

const loginReducer = (
  user = { isAuthenticated: false, user: {} },
  action: IAction
) => {
  let newUser;

  switch (action.type) {
    case actionsTypes.loginUser:
      newUser = { ...user, isAuthenticated: true, user: action.user };
      break;
    case actionsTypes.registerUser:
      newUser = { ...user, isAuthenticated: false, user: action.user };
      break;
    default:
      newUser = user;
  }
  return newUser;
};

export default loginReducer;
