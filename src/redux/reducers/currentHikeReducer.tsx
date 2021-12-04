import actionTypes from "../actions/actionTypes";
import { IAction } from "./loginReducer";

const currentHikeReducer = (currentHike = {}, action: IAction) => {
  let newHike;

  switch (action.type) {
    case actionTypes.currentHike:
      newHike = { ...action.hike };
      break;
    case actionTypes.postHike:
      newHike = { ...action.hike };
      break;
    case actionTypes.updateHike:
      newHike = { ...action.hike };
      break;
    case actionTypes.deleteHike:
      newHike = { ...action.hike };
      break;
    default:
      newHike = currentHike;
  }
  return newHike;
};

export default currentHikeReducer;
