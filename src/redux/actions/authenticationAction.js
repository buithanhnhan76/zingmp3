import { LOG_IN, LOG_OUT } from "../types";

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
