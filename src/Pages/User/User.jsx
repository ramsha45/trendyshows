import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import MainLayout from "../../Views/MainLayout/MainLayout";

const useStyles = makeStyles((theme) => ({
  userDetails: {
    boxSizing: "border-box",
    padding: "19px 19px",
    color: "white"
  },
  avatar: {
    height: 100,
    width: 100,
  },
}));

function User({ auth }) {
  const classes = useStyles();
  return (
    <MainLayout>
      <Grid
        className={classes.userDetails}
        item
        container
        justify="center"
        xs={12}
      >
        <Avatar className={classes.avatar} />
      </Grid>
      <Grid
        className={classes.userDetails}
        item
        container
        justify="center"
        xs={12}
      >
        <Typography variant="h4">{auth ? auth.userName : ""}</Typography>
      </Grid>
    </MainLayout>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(User);
