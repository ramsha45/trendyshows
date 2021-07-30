import { removeFromFav } from '../../Utility/favorite' ;
import { REMOVE_USER, SET_USER, UPDATE_USER,ADD_TO_FAV,REMOVE_FROM_FAV} from "./authConstant";

var initialstate = null;

var authReducer = (state=initialstate, action) => {
    var {type, payload} = action;
    switch (type) {
        case SET_USER:
            return  payload.user;
        case REMOVE_USER:
            return null;
        case UPDATE_USER:
            return {
                ...state,
                ...payload.updatedUser
            }
        case ADD_TO_FAV:
            return{
                ...state,
                favorites : [...state.favorites , payload.movieId]
            }
        case REMOVE_FROM_FAV:
                return removeFromFav(state,payload.movieId) 
        default:
            return state;
    }
}

export default authReducer;

