import { UPDATE_LOCALE } from "../types";

const initialState = {
  translate: {
    sidebar: { items: [], bannerItems: [], button: { buttonLabel: "" } },
    header: {
      searchBar: {},
    },
    partner: {},
    head: { title: "" },
  },
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
