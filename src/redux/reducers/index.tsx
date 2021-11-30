import { combineReducers } from "redux";
import hikeReducer from "./hikeReducer";
import loginReducer from "./loginReducer";

const familyReducer = combineReducers({
  login: loginReducer,
  hiking: hikeReducer,
});

export default familyReducer;
