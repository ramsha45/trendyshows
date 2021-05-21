import { SET_MOVIES } from "./moviesConstant"

export var setMovies = (movies) => async (dispatch) => {
    console.log(movies)
    try {
        dispatch({
            type:SET_MOVIES,
            payload:{
                movies
            }
        })
    } catch (error) {
        console.log(error)
    }
}