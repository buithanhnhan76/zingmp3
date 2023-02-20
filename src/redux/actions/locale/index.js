import { UPDATE_LOCALE, ERROR } from "../../types";

// locale
export const updateLocale =
  ({ translate }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_LOCALE,
        payload: { translate },
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
