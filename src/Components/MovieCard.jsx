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
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  media: {
    height: 250,
    backgroundSize: "100% 100%,cover",
  },
}));
function MovieCard({ movie }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={movie.posterurl}
          title="Contemplative Reptile"
        />
        <CardContent>
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
        <Button size="small" color="primary">
          Details
        </Button>
      </CardActions>
    </Card>
  );
}

export default MovieCard;
