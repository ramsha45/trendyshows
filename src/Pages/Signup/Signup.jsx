import React from "react";
import AuthView from "../../Views/AuthView";
import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { handleNavigation } from "../../Utility/common";

const useStyles = makeStyles({
  fieldInputColor: {
    // color:'#ffffff'
  },
  pointer: {
    cursor: "pointer",
  },
});
function Signup() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AuthView>
      <Grid item xs={12} lg={6}>
        <TextField
          variant="filled"
          id="email"
          label="Email"
          fullWidth
          color="primary"
          InputProps={{
            className: classes.fieldInputColor,
          }}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          variant="filled"
          id="username"
          label="UserName"
          fullWidth
          color="primary"
          InputProps={{
            className: classes.fieldInputColor,
          }}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          variant="filled"
          id="password"
          label="Passcode"
          fullWidth
          color="primary"
          type="password"
          InputProps={{
            className: classes.fieldInputColor,
          }}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          variant="filled"
          id="confirmpassword"
          label="Confirm Passcode"
          fullWidth
          color="primary"
          type="password"
          InputProps={{
            className: classes.fieldInputColor,
          }}
        />
      </Grid>
      <Grid item xs={12} lg={8}>
        <Button variant="contained" color="secondary" fullWidth>
          Signup
        </Button>
      </Grid>
      <Grid item xs={12} lg={8}>
        <Typography variant="body">
          Already have an account ?{" "}
          <Typography
            variant="body"
            color="secondary"
            className={classes.pointer}
            onClick={() => {
              handleNavigation("/",history);
            }}
          >
            Signin
          </Typography>{" "}
        </Typography>
      </Grid>
    
    </AuthView>
  );
}

export default Signup;
