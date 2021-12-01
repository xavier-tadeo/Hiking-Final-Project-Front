import actionTypes from "./actionTypes";

export interface IHikes {
  hikes: Array<Object>;
}

interface IUser {
  user: Object;
}

interface IHike {
  hike: Object;
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

export const currentHikeAction = (hike: IHike) => ({
  type: actionTypes.currentHike,
  hike,
});
