import {combineReducers, createStore} from "redux";
import characterReducer from "./characters/reducers";

const store = combineReducers({
    characterState: characterReducer
});

export default createStore(store, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
