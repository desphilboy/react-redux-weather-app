import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { apiCall, country, units, weatherRecords } from "./reducers";

const reducer = combineReducers({ apiCall, country, units, weatherRecords });

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
