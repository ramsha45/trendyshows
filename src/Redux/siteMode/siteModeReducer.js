import { HANDLE_LOADER, HANDLE_MODE } from "./siteModeConstants";

var initialState = {
    mode : true,
    isLoading: false,
}

var siteModeReducer = (state=initialState, action) => {
    var {type, payload} = action;
    switch (type) {
        case HANDLE_MODE:
            return {...state,mode:payload}
        case HANDLE_LOADER:
            return {...state,isLoading:payload}
        default:
            return state
    }
}

export default siteModeReducer