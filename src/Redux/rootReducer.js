import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import moviesReducer from "./movies/moviesReducer";
import siteModeReducer from "./siteMode/siteModeReducer";

var rootReducer = combineReducers({
    auth:authReducer,
    movies:moviesReducer,
    themeMode:siteModeReducer
})

export default rootReducer;