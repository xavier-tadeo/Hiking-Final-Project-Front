import { combineReducers } from "redux";
import loginReducer from "./loginReducer";

const familyReducer = combineReducers({
  login: loginReducer,
});

export default familyReducer;
