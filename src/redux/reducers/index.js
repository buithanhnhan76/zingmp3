// libs
import { combineReducers } from "redux";
// reducer
import authenticationReducer from "./authenticationReducer";
import localeReducer from "./localeReducer";

export default combineReducers({
  authentication: authenticationReducer,
  locale: localeReducer,
});
