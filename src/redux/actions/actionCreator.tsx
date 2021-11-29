import actionTypes from "./actionTypes";

interface IHikes {
  hikes: Array<Object>;
}

interface IUser {
  user: Object;
}

export const getHikesAction = ({ hikes }: IHikes) => ({
  type: actionTypes.getHikes,
  hikes,
});

export const loginUserAction = ({ user }: IUser) => ({
  type: actionTypes.loginUser,
  user,
});
