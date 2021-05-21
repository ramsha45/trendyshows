import { createStore, applyMiddleware } from "redux";
import  thunk  from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./rootReducer";

var middlewares = [thunk]

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middlewares)
));

export default store; 