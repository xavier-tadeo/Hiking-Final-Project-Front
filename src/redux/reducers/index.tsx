import { combineReducers } from "redux";
import curretHikeReducer from "./currentHikeReducer";
import hikeReducer from "./hikeReducer";
import loginReducer from "./loginReducer";

const familyReducer = combineReducers({
  login: loginReducer,
  hiking: hikeReducer,
  currentHike: curretHikeReducer,
});

export default familyReducer;
