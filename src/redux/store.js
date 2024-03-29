// libs
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
// reducer
import rootReducer from "./reducers";

// initial states
const initalState = {};

// middleware
const middleware = [thunk];

// creating store
export const store = createStore(
  rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

// custom store
export const createCustomStore = (customInitalState) =>
  createStore(
    rootReducer,
    customInitalState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
