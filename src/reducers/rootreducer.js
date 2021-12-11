import counterReducer from "./counterreducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  count: counterReducer,
});

export default rootReducer;