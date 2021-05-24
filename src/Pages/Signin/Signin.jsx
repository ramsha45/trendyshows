import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { handleNavigation } from "../../Utility/common";
import AuthView from "../../Views/AuthView";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { signin } from "../../Redux/auth/authAction";
import { handleLoader } from "../../Redux/siteMode/siteModeActions";
const useStyles = makeStyles({
  fieldInputColor: {
    // color:'#ffffff'
  },
  pointer: {
    cursor: "pointer",
  },
});
function Signin({ signin, handleLoader }) {
  const classes = useStyles();
  const history = useHistory();

  // make sure to follow the correct(camelCase) convention e.g setEmail
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = credentials;
  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Integrate signup functioanlity and reroute to "/"
  return (
    <AuthView>
      <Grid item xs={12} lg={8}>
        <TextField
          variant="filled"
          id="email"
          label="Email"
          fullWidth
          name="email"
          value={email}
          color="primary"
          onChange={(e) => {
            handleFormInput(e);
          }}
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
          name="password"
          value={password}
          onChange={(e) => {
            handleFormInput(e);
          }}
          color="primary"
          InputProps={{
            className: classes.fieldInputColor,
          }}
          inputProps={{ minLength: 6 }}
        />
      </Grid>
      <Grid item xs={12} lg={8}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={() => {
            handleLoader(true)
            signin(credentials);
          }}
        >
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
              handleNavigation("/signup", history);
            }}
          >
            Signup
          </Typography>{" "}
        </Typography>
      </Grid>
    </AuthView>
  );
}

var actions = {
  signin,
  handleLoader,
};

export default connect(null, actions)(Signin);
