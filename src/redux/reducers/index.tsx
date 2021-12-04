import { combineReducers } from "redux";
import currentHikeReducer from "./currentHikeReducer";
import hikeReducer from "./hikeReducer";
import loginReducer from "./loginReducer";
import userReducer from "./userReducer";

const familyReducer = combineReducers({
  login: loginReducer,
  hiking: hikeReducer,
  currentHike: currentHikeReducer,
  user: userReducer,
});

export default familyReducer;
