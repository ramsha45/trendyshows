import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { handleNavigation } from "../../Utility/common";
import AuthView from "../../Views/AuthView";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
  fieldInputColor: {
    // color:'#ffffff'
  },
  pointer: {
    cursor: "pointer",
  },
});
function Signin() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AuthView>
      <Grid item xs={12} lg={8}>
        <TextField
          variant="filled"
          id="email"
          label="Email/UserName"
          fullWidth
          color="primary"
          InputProps={{
            className: classes.fieldInputColor,
          }}
        />
      </Grid>
      <Grid item xs={12} lg={8}>
        <TextField
          variant="filled"
          id="password"
          type="password"
          label="Passcode"
          fullWidth
          color="primary"
          InputProps={{
            className: classes.fieldInputColor,
          }}
        />
      </Grid>
      <Grid item xs={12} lg={8}>
        <Button variant="contained" color="secondary" fullWidth>
          Login
        </Button>
      </Grid>
      <Grid item xs={12} lg={8}>
        <Typography variant="body">
          Don't have an account ?{" "}
          <Typography
            variant="body"
            color="secondary"
            className={classes.pointer}
            onClick={() => {
              handleNavigation("/signup",history);
            }}
          >
            Signup
          </Typography>{" "}
        </Typography>
      </Grid>
    </AuthView>
  );
}

export default Signin;
