import { ADD_REVIEW } from "./reviewsConst";

var initialState = []

var productReducer = (state=initialState, actions)=>{
    var {type,payload} = actions
    switch (type) {
        case ADD_REVIEW:
            return [...state, ...payload.reviewObj]
        case SET_REVIEWS:
            return [...payload.reviews]    
        default:
            return state;
    }
}

export default productReducer