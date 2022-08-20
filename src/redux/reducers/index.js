import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";
import localeReducer from "./localeReducer";

export default combineReducers({
  authentication: authenticationReducer,
  locale: localeReducer,
});
