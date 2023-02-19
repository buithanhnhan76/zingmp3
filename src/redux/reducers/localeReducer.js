// action
import vi from "public/locale/vi";
import { UPDATE_LOCALE } from "../types";
// initial data

const initialState = {
  translate: vi,
  loading: true,
};

const localeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOCALE:
      return {
        ...state,
        translate: action.payload.translate,
        loading: false,
      };

    default:
      return state;
  }
};

export default localeReducer;
