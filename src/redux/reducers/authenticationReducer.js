import { LOG_IN, LOG_OUT } from "../types";

const initialState = {
  user: {},
  loading: true,
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };

    case LOG_OUT:
      return {
        ...state,
        user: {},
        loading: false,
      };

    default:
      return state;
  }
};

export default authenticationReducer;
