import React, { useEffect, useState } from 'react'
import {    connect} from 'react-redux';
import DashboardLayout from '../../Views/DashboardLayout/DashboardLayout'
import { fetchMovies, fetchMovieByCategory, fetchMovieByTitle, fetchMovieByGenre } from "../../Redux/movies/moviesAction";
import MovieCard from '../../Components/MovieCard';
import { Grid } from '@material-ui/core';

function Dashboard({user, movies, fetchMovies, fetchMovieByTitle, fetchMovieByCategory, fetchMovieByGenre}) {
    const getMovies = (searchBy, searchItem) => {
        if (searchBy=="Industry") fetchMovieByCategory(searchItem);
        else if(searchBy == "Title") fetchMovieByTitle(searchItem);
        else if(searchBy == "Genre") fetchMovieByGenre(searchItem)
    }
    const isfavorite = (id) => {
        return( user?.favorites?.find(x => x === id) ? true :false )
    }
    return ( <DashboardLayout getMovies={getMovies}>
            <Grid container justify="center" spacing={5}>
                {
                    movies.map((movie)=>{
                        return(
                            <Grid item xs={6} md={3}>
                            <MovieCard 
                                movie={movie} 
                                isFav={isfavorite(movie.movid)}
                            />
                            </Grid>
                        )
                    })
                }    
            </Grid>
    </DashboardLayout> 
    )
}

var mapState = (state) => ({
    movies: state.movies,
    user: state.auth
})
var action = {
    fetchMovies,
    fetchMovieByCategory,
    fetchMovieByTitle,
    fetchMovieByGenre
}


export default connect(mapState,action)(Dashboard)