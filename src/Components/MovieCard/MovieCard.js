import React from 'react'
import { Link } from 'react-router-dom'
import "./Movie.css"

const MovieCard = (props) => {
    var {Title,Poster,imdbID}=props
    return (
        <div>
            <Link to={`/movie/${imdbID}`}>
                <h4>{Title}</h4>
                <img src={Poster}/>
            </Link>
        </div>
    )
}

export default MovieCard