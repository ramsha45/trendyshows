import { HANDLE_LOADER, HANDLE_MODE } from "./siteModeConstants"

export const handleThemeMode = (mode) => async (dispatch) => {
    return dispatch({
        type: HANDLE_MODE,
        payload: mode
    })
}

export const handleLoader = (command) => async (dispatch) => {
    return dispatch({
        type: HANDLE_LOADER,
        payload: command
    })
}