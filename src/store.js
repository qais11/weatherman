import { createStore, applyMiddleware } from "redux";

import weather from "./ducks/weather";

import promiseMiddleware from "redux-promise-middleware";


export default createStore( weather, undefined, applyMiddleware( promiseMiddleware() ) );
