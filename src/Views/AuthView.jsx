import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    backgroundColor: "rgba(0,0,0, 0.8)",
    height: "100vh",
    overflow: "hidden",
    width: "100%",
  },
  authBox: {
    height: "auto",
    boxSizing: "border-box",
    padding: "2rem 2rem",
  },
});

function AuthView({ children }) {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        className={classes.root}
        justify="center"
        alignItems="center"
      >
        <Grid
          container
          item
          xs={12}
          lg={6}
          className={classes.authBox}
          justify="center"
          alignItems="center"
          spacing={5}
        >
          <Grid container item xs={12} justify="center">
            <Typography variant="h2" color="secondary" align="center">
              <Box fontWeight="fontWeightBold">TRENDY SHOWS</Box>
            </Typography>
          </Grid>
          {children}
        </Grid>
      </Grid>
    </>
  );
}

export default AuthView;
