import { LOG_IN, LOG_OUT, UPDATE_LOCALE } from "../types";

// authentication
export const logIn =
  ({ user }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: LOG_IN,
        payload: { user },
      });
    } catch (error) {
      dispatch({
        type: "error",
        payload: "error message",
      });
    }
  };

export const logOut = () => async (dispatch) => {
  try {
    dispatch({
      type: LOG_OUT,
      payload: {},
    });
  } catch (error) {
    dispatch({
      type: "error",
      payload: "error message",
    });
  }
};

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
        type: "error",
        payload: "error message",
      });
    }
  };
