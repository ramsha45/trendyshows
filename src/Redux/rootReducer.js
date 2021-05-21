import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import moviesReducer from "./movies/moviesReducer";

var rootReducer = combineReducers({
    auth:authReducer,
    movies:moviesReducer
})

export default rootReducer;