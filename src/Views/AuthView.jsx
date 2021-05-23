import {
  Box,
  FormControlLabel,
  Grid,
  makeStyles,
  Switch,
  Typography,
} from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { handleThemeMode } from "../Redux/siteMode/siteModeActions";
const useStyles = makeStyles({
  root: {
    backgroundColor: "rgba(0,0,0, 0.8)",
    minHeight: "100vh",
    height: "100%",
    maxHeight: "min-content",
    width: "100%",
  },
  authBox: {
    height: "auto",
    boxSizing: "border-box",
    padding: "2rem 2rem",
  },
});

function AuthView({ children, currentMode, handleThemeMode }) {
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
          spacing={2}
        >
          <Grid container item xs={12} justify="center">
            <Typography variant="h2" color="secondary" align="center">
              <Box fontWeight="fontWeightBold">TRENDY SHOWS</Box>
            </Typography>
          </Grid>
          {children}
          <Grid container item xs={12} justify="center">
            <FormControlLabel
              control={
                <Switch
                  checked={currentMode}
                  onChange={()=>{handleThemeMode(!currentMode)}}
                  name="mode"
                  color="secondary"
                />
              }
              label="Switch Theme"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

var mapStateToProps = (state) => {
  return {
    currentMode: state.themeMode.mode,
  };
};
var actions = {
  handleThemeMode,
};
export default connect(mapStateToProps, actions)(AuthView);
