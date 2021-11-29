import actionTypes from "./actionTypes";

interface IHikes {
  hikes: Array<Object>;
}

export const getHikesAction = ({ hikes }: IHikes) => ({
  type: actionTypes.getHikes,
  hikes,
});
