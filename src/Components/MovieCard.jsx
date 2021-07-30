import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { addToFav, removeFromFav } from "../Redux/auth/authAction";
import { connect } from "react-redux";
import { handleNavigation } from "../Utility/common";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  media: {
    height: 250,
    backgroundSize: "100% 100%,cover",
  },
}));
function MovieCard({ isFav, movie, addToFav, removeFromFav}) {
  const classes = useStyles();
  const history = useHistory();

  const addFavorite = () => {
    addToFav(movie.movid)
  }

  const removeFavorite = () => {
    removeFromFav(movie.movid)
  }


  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={movie.posterurl}
          title="Contemplative Reptile"
        />
        <CardContent>
           {
             !isFav ? <StarBorderIcon onClick={addFavorite} /> : <StarIcon onClick={removeFavorite}/>
           }
          <Typography gutterBottom variant="h5" component="h2">
            {movie.title || "Title"}
          </Typography>
          <Typography gutterBottom variant="body" component="p">
            Imdb: {movie.imdbRating || "Title"}
          </Typography>
          <Typography gutterBottom variant="body" component="p">
            Categpry: {movie.category || ""}
          </Typography>
          <Typography gutterBottom variant="body" component="p">
            Release Year: {movie.year || ""}
          </Typography>
          <Typography gutterBottom variant="body" component="p">
            Release Date: {movie.releaseDate || ""}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>handleNavigation(`/movie/${movie.movid}`,history)}>
          Details
        </Button>
      </CardActions>
    </Card>
  );
}

var action ={
  addToFav,
  removeFromFav
}

var mapState = (state) => ({
  user: state.auth
})

export default connect(mapState,action)(MovieCard);
