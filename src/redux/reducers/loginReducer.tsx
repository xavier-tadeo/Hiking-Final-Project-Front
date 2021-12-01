import actionsTypes from "../actions/actionTypes";

export interface IAction {
  type: string;
  user?: Object;
  hikes: Array<Object>;
  currentHike?: Object;
  hike?: object;
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
