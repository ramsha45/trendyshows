import { HANDLE_MODE } from "./siteModeConstants";

var initialState = {
    mode : true
}

var siteModeReducer = (state=initialState, action) => {
    var {type, payload} = action;
    switch (type) {
        case HANDLE_MODE:
            return {...state,mode:payload}
        default:
            return state
    }
}

export default siteModeReducer