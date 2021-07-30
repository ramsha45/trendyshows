import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {serverTimestamp} from "../../Firebase/Firebase"
import {addreview,fetchReviews} from "../../Redux/reviews/reviewsAction";
import { getUser } from "../../Redux/auth/authAction";
import ReactPlayer from 'react-player'



const Movie = ({user, movies,addreview,getUser,fetchReviews, match:{params:{movieId}}}) => {
    console.log(movieId)
    const [movie, setMovie] = useState({})
    const [reviews, setReviews] = useState([])
    var [reviewInput, setReviewInput] = useState("")
    const [username, setusername] = useState("")

    var handleSubmit=(e) => {
        e.preventDefault()
        var ReviewObj = {
            content: reviewInput,
            movieId,
            reviewedBy:user.uid,
            userName: user.userName,
            createdAt: serverTimestamp()
        }
        addreview(ReviewObj)
        setReviews([...reviews, {...ReviewObj}]);
        setReviewInput('')
    }

    async function getReviews(){
        let movieReviews = await fetchReviews(movieId)
        setReviews([...movieReviews])
    }
    
    useEffect(() => {
        const m = movies.find((movie) => movie.movid === movieId)
        setMovie({...m});
        getReviews()
    }, [])

    const renderReviews = reviews.map(rev => {
        return(
            <>
                <h3>{rev.userName}</h3>
                <p>{rev.content}</p>
            </>
        )
    })
    
    return (
        <div>
            <h1>Movie Page</h1>
            <img src={movie?.poster}/>
            <h1>{movie.title}</h1>
            <h1>Story</h1>
            <p>{movie?.storyline}</p>
            <h1>Genre</h1>
            <p>{movie?.genres}</p>
            <h1>Ratings</h1>
            <p>{movie?.ratings}</p>
            <h1>Reviews</h1>
            {renderReviews}
            <ReactPlayer 
                url={movie.trailer}
                controls={true} 
            />
            <form onSubmit={handleSubmit}>
             <textarea value={reviewInput} onChange={(e)=> setReviewInput(e.target.value)} placeholder="Write reviews" col="50" rows ="20"></textarea><br/>
             <button type="submit">Submit</button>
            </form>            
        </div>
    )
}

var action = {
    addreview,
    fetchReviews,
    getUser
}

var mapState =(state) => ({
    movies:state.movies,
    user: state.auth
})

export default connect(mapState,action)(Movie)
