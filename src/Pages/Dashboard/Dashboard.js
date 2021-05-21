import React from 'react'
import { useEffect } from 'react'
import MovieList from '../../Components/MovieList/MovieList';
import Search from '../../Components/Search/Search';
import { setMovies } from "../../Redux/movies/moviesAction";
import { connect } from 'react-redux';
import Signout from '../../Components/Signout/Signout';

const Dashboard = ({setMovies,movies}) => {
    var fetchData = async() => {
        var res = await fetch("http://www.omdbapi.com/?apikey=2f009254&s=superman");
        var data = await res.json()
        console.log(data.Search)
        setMovies(data.Search)
    }
    useEffect(() => {
        console.log("here")
        fetchData()
    }, [])
    return (
        <div>
            <h1>Dashboard Page</h1>
            <Search/>
            <Signout/>
            <MovieList/>
        </div>
    )
}

var actions = {
    setMovies
}
var mapState = (state) => ({
    movies: state.movies
})

export default connect(mapState,actions)(Dashboard)
