import { ADD_TO_FAV} from "./authConstant";

var initialstate = null;

var authReducer = (state=initialstate, action) => {
    var {type, payload} = action;
    switch (type) {
        case ADD_TO_FAV:
            return{
                ...state,
                favorites : [...state.favorites , ...payload.movieId]
            }
        default:
            return state;
    }
}

export default authReducer;
