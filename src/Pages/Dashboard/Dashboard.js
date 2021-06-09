import React, { useEffect, useState } from 'react'
import {    connect} from 'react-redux';
import DashboardLayout from '../../Views/DashboardLayout/DashboardLayout'
import { fetchMovies } from "../../Redux/movies/moviesAction";
import MovieCard from '../../Components/MovieCard';
import { Grid } from '@material-ui/core';

function Dashboard({movies, fetchMovies}) {
    
    useEffect(() => {
    }, [movies])
    return ( <DashboardLayout >
            <Grid container justify="center" spacing={5}>
                {
                    movies.map((movie)=>{
                        return(
                        <Grid item xs={6} md={3}>
                        <MovieCard movie={movie}/>
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
})
var action = {
    fetchMovies,
}


export default connect(mapState,action)(Dashboard)