import { IHike } from "../actions/actionCreator";
import actionsTypes from "../actions/actionTypes";

export interface IAction {
  type: string;
  user?: Object;
  hikes?: any;
  currentHike?: Object;
  hike?: IHike;
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
    case actionsTypes.logout:
      console.log("TTTTTTTT");
      newUser = { user: {}, isAuthenticated: false };
      break;
    default:
      newUser = user;
  }
  return newUser;
};

export default loginReducer;
