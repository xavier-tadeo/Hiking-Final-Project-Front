import actionTypes from "./actionTypes";

export interface IHikes {
  hikes: Array<Object>;
}

interface IUser {
  user: Object;
}

export interface IHike {
  hike: any;
}

export const getUserAction = (user: IUser) => ({
  type: actionTypes.getUser,
  user,
});

export const registerUserAction = ({ user }: IUser) => ({
  type: actionTypes.registerUser,
  user,
});

export const loginUserAction = ({ user }: IUser) => ({
  type: actionTypes.loginUser,
  user,
});

export const getHikesAction = (hikes: IHikes) => ({
  type: actionTypes.getHikes,

  hikes,
});

export const currentHikeAction = (hike: IHike) => ({
  type: actionTypes.currentHike,
  hike,
});

export const postHikeAction = (hike: IHike) => ({
  type: actionTypes.postHike,
  hike,
});

export const updateHikeAction = (hike: IHike) => ({
  type: actionTypes.updateHike,
  hike,
});

export const deleteHikeAction = (id: string) => ({
  type: actionTypes.deleteHike,
  id,
});

export const logoutUserAction = () => ({
  type: actionTypes.logout,
});
