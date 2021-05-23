import React, { useState } from "react";
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

// make sure to follow the correct(camelCase) convention e.g setEmail
const [credentials, setCredentials] = useState({
  email: '',
  userName: '',
  password: '',
  confirmPassword: ''
})
const {email, password, confirmPassword, userName} = credentials
const handleFormInput = (e) => {
  const {name, value} = e.target
  setCredentials((prevState)=>({
    [name] : value
  }))
}

// Integrate signup functioanlity and reroute to "/"

  return (
    <AuthView>
      <Grid item xs={12} lg={6}>
        <TextField
          variant="filled"
          id="email"
          label="Email"
          fullWidth
          name="email"
          onChange={(e)=>{handleFormInput(e)}}
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
          onChange={(e)=>{handleFormInput(e)}}
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
          onChange={(e)=>{handleFormInput(e)}}
          value={password}
          color="primary"
          type="password"
          inputProps={{minLength :6}}
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
          onChange={(e)=>{handleFormInput(e)}}
          value={confirmPassword}
          color="primary"
          type="password"
          inputProps={{minLength :6}}
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
