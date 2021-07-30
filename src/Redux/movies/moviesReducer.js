import { SET_MOVIES } from "./moviesConstant";

var initialState = []

var moviesReducer= (state=initialState,{type,payload}) => {
    switch (type) {
        case SET_MOVIES:
            return [...payload.movies]
        default:
            return state;
    }
}

export default moviesReducer;