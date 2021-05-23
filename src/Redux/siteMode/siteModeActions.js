import { HANDLE_MODE } from "./siteModeConstants"

export const handleThemeMode = (mode) => async (dispatch) => {
    return dispatch({
        type: HANDLE_MODE,
        payload: mode
    })
}