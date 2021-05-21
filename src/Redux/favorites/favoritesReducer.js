import { SET_FAVS } from "../../Redux/favorites/favoritesConstant";
initialState=[];

var favoritesReducer = (state=initialState, {type,payload}) => {
    switch (type) {
        case SET_FAVS:
            
            break;
    
        default:
            return state;
    }

}

export default favoritesReducer;