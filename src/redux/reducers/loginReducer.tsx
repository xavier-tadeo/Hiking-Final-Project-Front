import actionsTypes from "../actions/actionTypes";

interface IAction {
  type: String;
  user: Object;
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

    default:
      newUser = user;
  }
  return newUser;
};

export default loginReducer;
