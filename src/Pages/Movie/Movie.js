import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { serverTimestamp } from "../../Firebase/Firebase"
import { addreview, fetchReviews } from "../../Redux/reviews/reviewsAction";
import { getUser } from "../../Redux/auth/authAction";
import ReactPlayer from 'react-player'
import MainLayout from '../../Views/MainLayout/MainLayout';
import {
    Grid, makeStyles, Card, CardMedia,
    CardActionArea, Typography, TextField, Button
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    bannerGrid: {
        height: 400,
    },
    detailGrid: {
        backgroundColor: 'lightgray',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
        borderRadius: '10px 10px',
        marginTop: '10px'
    },
    rootCard: {
        width: 200,
        height: 250,
    },
    media: {
        height: 250,
        backgroundSize: "100% 100%,cover",
    },
}));


const Movie = ({ user, movies, addreview, getUser, fetchReviews, match: { params: { movieId } } }) => {
    const classes = useStyles()
    const [movie, setMovie] = useState(null)
    const [reviews, setReviews] = useState([])
    const [review, setReview] = useState('')
    var [reviewInput, setReviewInput] = useState("")
    const [username, setusername] = useState("")

    var handleSubmit = (e) => {
        e.preventDefault()
        var ReviewObj = {
            content: reviewInput,
            movieId,
            reviewedBy: user.uid,
            userName: user.userName,
            createdAt: serverTimestamp()
        }
        addreview(ReviewObj)
        setReviews([...reviews, { ...ReviewObj }]);
        setReviewInput('')
    }

    async function getReviews() {
        let movieReviews = await fetchReviews(movieId)
        setReviews([...movieReviews])
    }

    useEffect(() => {
        const m = movies.find((movie) => movie.movid === movieId)
        if (m)
            setMovie({ ...m });
        getReviews()
    }, [])

    const renderReviews = reviews.map(rev => {
        return (
            <>
                <h3>{rev.userName}</h3>
                <p>{rev.content}</p>
            </>
        )
    })
    console.log(reviews)
    return (
        <MainLayout>
            {
                movie ?
                    <Grid container justify="center" >
                        <Grid item xs={12} className={classes.bannerGrid}>
                            <ReactPlayer
                                url={movie.trailer}
                                controls={true}
                                width="100%"
                                height="100%"
                            />
                        </Grid>
                        <Grid container item xs={8} className={classes.detailGrid} spacing={2}>
                            <Grid item xs={4} className={classes.movieImage}>
                                <Card className={classes.rootCard}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={movie.posterurl}
                                            title="Contemplative Reptile"
                                        />
                                    </CardActionArea>
                                </Card>
                                <Typography variant="subtitle2">Year {movie.year}</Typography>
                                <Typography variant="subtitle2">{
                                    movie.genres.map((genre) => {
                                        return (
                                            <span>{genre} </span>
                                        )
                                    })
                                }</Typography>
                                <Typography variant="subtitle2">{
                                    movie.actors.map((actor) => {
                                        return (
                                            <span>{actor} </span>
                                        )
                                    })
                                }</Typography>
                            </Grid>
                            <Grid item xs={8} className={classes.movieImage}>
                                <Typography variant="h3">{movie.title}</Typography>
                                <Typography variant="subtitle2">CATEGORY {movie.category}</Typography>
                                <Typography variant="subtitle2">IMDB RATING {movie.imdbRating}</Typography>
                                <Typography variant="h5">STORY LINE</Typography>
                                <Typography variant="body2">{movie.storyline}</Typography>
                            </Grid>
                            <Grid container item xs={12} >
                                <Grid item xs={12}>
                                    <Typography variant="h6">Reviews</Typography>
                                </Grid>
                                {
                                    reviews.map((review) => {
                                        return (
                                            <Grid container item xs={12} style={{ marginTop: '6px' }}>
                                                <Alert variant="outlined" icon="" style={{ width: '100%' }}>
                                                    <Typography variant="subtitle1">{review.content}</Typography>
                                                    <Typography variant="body2" style={{ color: 'gray' }}> By: {review.userName}</Typography>
                                                </Alert>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Give review"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    fullWidth
                                    value={review}
                                    onChange={(e) => { setReview(e.target.value) }}
                                />
                            </Grid>
                            <Grid container item xs={12} justify="center">
                                <Button variant="contained" color="primary" disableElevation>
                                    Send Review
                                </Button>
                            </Grid>
                        </Grid >
                    </Grid >
                    :
                    ''
            }
        </MainLayout >
    )
}

{/* <div>
<h1>Movie Page</h1>
<img src={movie?.poster} />
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
    <textarea value={reviewInput} onChange={(e) => setReviewInput(e.target.value)} placeholder="Write reviews" col="50" rows="20"></textarea><br />
    <button type="submit">Submit</button>
</form>
</div> */}


var action = {
    addreview,
    fetchReviews,
    getUser
}

var mapState = (state) => ({
    movies: state.movies,
    user: state.auth
})

export default connect(mapState, action)(Movie)
