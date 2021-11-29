import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import familyReducer from "../reducers";

const configureStore = () => {
  return createStore(
    familyReducer,

    composeWithDevTools(applyMiddleware(thunk))
  );
};

export default configureStore;
