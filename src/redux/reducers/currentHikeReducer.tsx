import actionTypes from "../actions/actionTypes";
import { IAction } from "./loginReducer";

const curretHikeReducer = (currentHike = {}, action: IAction) => {
  let newHike;

  switch (action.type) {
    case actionTypes.currentHike:
      newHike = { ...action.currentHike };
      break;

    default:
      newHike = currentHike;
  }
  return newHike;
};

export default curretHikeReducer;
