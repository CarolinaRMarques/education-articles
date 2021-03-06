import logger from "redux-logger";

import { applyMiddleware, createStore, compose } from "redux";

import rootReducer from "./root-reducer";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
	middlewares.push(logger);
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	rootReducer,
	composeEnhancer(applyMiddleware(...middlewares))
);

export default store;
