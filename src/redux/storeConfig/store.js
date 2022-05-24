// ** Redux, Thunk & Root Reducer Imports
import thunk from "redux-thunk";
import createDebounce from "redux-debounced";
import rootReducer from "../reducers/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import reduxReset from "redux-reset";

// ** init middleware
const middleware = [thunk, createDebounce()];

// ** Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// ** Create store
const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middleware), reduxReset())
);

const resetStore = () =>
  store.dispatch({
    type: "RESET",
  });

export { store, resetStore };
