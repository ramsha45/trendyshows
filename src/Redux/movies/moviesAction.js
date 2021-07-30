import { firestore, serverTimestamp, storage } from "../../Firebase/Firebase"
import { SET_MOVIES } from "./moviesConstant"

export var fetchMovies = (pageNo=1) => async (dispatch) => {
    try {
        var movies = []
        var querry = await firestore.collection("movies").orderBy("id").limit(pageNo*10)
        var data = await querry.get()
        // var data = await firestore.collection("movies").get()
        data.forEach(doc => {
            movies.push({...doc.data(), movid: doc.id})
        });
        dispatch({
            type:SET_MOVIES,
            payload: {
                movies
            }
        });
    } catch (error) {
        console.log(error)
    }
}

export var fetchMovieByTitle = (movieTitle) => async (dispatch) => {
    try {
        var movies = [];
        var querry = await  firestore.collection("movies").where("title", "==", movieTitle ).get();
        querry.forEach(doc => {
            movies.push({...doc.data(), movid: doc.id})
        });
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

export var fetchMovieByCategory = (category) => async (dispatch) => {
    try {
        var movies = [];
        var querry = await  firestore.collection("movies").where("category", "==", category ).get();
        querry.forEach(doc => {
            movies.push({...doc.data(), movid: doc.id})
        });
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

export var fetchMovieByGenre = (genre) => async (dispatch) => {
    try {
        var movies = [];
        var querry = await  firestore.collection("movies").where("genres", "array-contains", genre ).get();
        querry.forEach(doc => {
            movies.push({...doc.data(), movid: doc.id})
        });
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

