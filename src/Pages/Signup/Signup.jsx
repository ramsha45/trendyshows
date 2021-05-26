import React, { useState } from "react";
import AuthView from "../../Views/AuthView";
import {
  Button,
  Grid,
  IconButton,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { handleNavigation, isEmpty } from "../../Utility/common";
import { connect } from "react-redux";
import { signup } from "../../Redux/auth/authAction";
import { handleLoader } from "../../Redux/siteMode/siteModeActions";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from '@material-ui/icons/Close';
import { confirmPasswordMatched, valid } from "../../Utility/validation";

const useStyles = makeStyles({
  fieldInputColor: {
    // color:'#ffffff'
  },
  pointer: {
    cursor: "pointer",
  },
});
function Signup({ signup }) {
  const classes = useStyles();
  const history = useHistory();
  const [formErrors, setFormErrors] = useState(null);
  // make sure to follow the correct(camelCase) convention e.g setEmail
  const [credentials, setCredentials] = useState({
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const { email, password, confirmPassword, userName } = credentials;
  
  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const handleSignup = async () => {
      if(valid(credentials)){
        if(confirmPasswordMatched(credentials.password, credentials.confirmPassword)){
          handleLoader(true);
          const message = await signup(credentials);
          if (message) {
            setFormErrors(message);
            handleLoader(false);
          }
        }else{
          setFormErrors("Confirm Password not matched")
        }
      }
      else{
        setFormErrors("All fields must be filled")
      }
  };

  const clearErrors = () => {
    setFormErrors(null);
  };
  // Integrate signup functioanlity and reroute to "/"

  return (
    <AuthView>
      <Grid container item xs={12} style={{overflow: "hidden"}} justify="center">
        {formErrors ? (
          <Alert severity="error" action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={clearErrors}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }>{formErrors}</Alert>
        ) : (
          ""
        )}
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          variant="filled"
          id="email"
          label="Email"
          fullWidth
          name="email"
          onChange={(e) => {
            handleFormInput(e);
          }}
          value={email}
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
          name="userName"
          onChange={(e) => {
            handleFormInput(e);
          }}
          value={userName}
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
          name="password"
          onChange={(e) => {
            handleFormInput(e);
          }}
          value={password}
          color="primary"
          type="password"
          inputProps={{ minLength: 6 }}
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
          name="confirmPassword"
          onChange={(e) => {
            handleFormInput(e);
          }}
          value={confirmPassword}
          color="primary"
          type="password"
          inputProps={{ minLength: 6 }}
          InputProps={{
            className: classes.fieldInputColor,
          }}
        />
      </Grid>
      <Grid item xs={12} lg={8}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={handleSignup}
        >
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
              handleNavigation("/", history);
            }}
          >
            Signin
          </Typography>{" "}
        </Typography>
      </Grid>
    </AuthView>
  );
}

var action = {
  signup,
  handleLoader,
};

export default connect(null, action)(Signup);
