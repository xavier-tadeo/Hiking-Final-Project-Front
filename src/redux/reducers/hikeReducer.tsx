import { IAction } from "./loginReducer";
import actionsTypes from "../actions/actionTypes";

const hikeReducer = (hike = [], action: IAction) => {
  let newHike;

  switch (action.type) {
    case actionsTypes.getHikes:
      newHike = [...action.hike];
      break;
    default:
      newHike = hike;
  }
  return newHike;
};

export default hikeReducer;
