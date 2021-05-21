import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { setMovies } from "../../Redux/movies/moviesAction";

const Search = ({setMovies}) => {
    
    var [title, setTitle] = useState("")
    
    var search = async(e) => {
        if(e.key==="Enter"){
            var data = await fetch(`http://www.omdbapi.com/?apikey=2f009254&s=${title}`);
            data = await data.json()
            console.log(data)
            setMovies(data.Search)
        }
    }
    return (
        <div>
            <input 
                value={title} 
                onChange={(e)=>setTitle(e.target.value)} 
                type="text" 
                placeholder="title"
                onKeyPress={search} 
            />
        </div>
    )
}

var action = {
    setMovies
}

export default connect(null,action)(Search)
