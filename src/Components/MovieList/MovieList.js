import React from 'react'
import { connect } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';


const MovieList = ({movies}) => {
        console.log(movies)
        return (
        <div>
            <h1>MovieList</h1>
            {movies.map((movie) => <MovieCard key={movie.imdbID} {...movie}/>)}
        </div>
    )
}

var mapState = (state) => ({
    movies: state.movies
})


export default connect(mapState)(MovieList)
