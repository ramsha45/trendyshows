import React from 'react'
import { connect } from 'react-redux'


const Movie = ({movies, match:{params:{movieId}}}) => {
    var m = movies.find((movie)=> movie.imdbID===movieId)
    
    return (
        <div>
            <h1>Movie Page</h1>
            <img src={m.Poster}/>
            <h1>{m.Title}</h1>
            <button>ADD TO FAVORITE</button>
        </div>
    )
}

var mapState =(state) => ({
    movies:state.movies
})

export default connect(mapState)(Movie)
