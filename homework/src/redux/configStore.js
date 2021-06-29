import {createStore , combineReducers} from "redux";
import myhomework from "./modules/myhomework" ;
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const rootReducer = combineReducers({myhomework});
const store = createStore(rootReducer);

export default store;