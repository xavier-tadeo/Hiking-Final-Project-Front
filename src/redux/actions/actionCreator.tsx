import actionTypes from "./actionTypes";

export interface IHikes {
  hikes: Array<Object>;
}

interface IUser {
  user: Object;
}

export const getHikesAction = (hikes: IHikes) => ({
  type: actionTypes.getHikes,

  hikes,
});

export const registerUserAction = ({ user }: IUser) => ({
  type: actionTypes.registerUser,
  user,
});

export const loginUserAction = ({ user }: IUser) => ({
  type: actionTypes.loginUser,
  user,
});
