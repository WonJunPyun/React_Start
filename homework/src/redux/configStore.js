import {createStore , combineReducers, applyMiddleware} from "redux";
import thunk from"redux-thunk";
import myhomework from "./modules/myhomework" ;
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({myhomework});
const store = createStore(rootReducer, enhancer);

export default store;