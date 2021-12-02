import { combineReducers } from "redux";
import currentHikeReducer from "./currentHikeReducer";
import hikeReducer from "./hikeReducer";
import loginReducer from "./loginReducer";

const familyReducer = combineReducers({
  login: loginReducer,
  hiking: hikeReducer,
  currentHike: currentHikeReducer,
});

export default familyReducer;
