import './App.css';
import { Switch,Route } from "react-router-dom";
import { useEffect } from "react";
import { firebaseAuthListner } from "./Redux/auth/authAction";
import { connect } from 'react-redux';
import Dashboard from './Pages/Dashboard/Dashboard';
import Movie from './Pages/Movie/Movie';
import Signin from './Pages/Signin/Signin';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Signup from './Pages/Signup/Signup';
import { useState } from 'react';
import Loader from './Components/Loader/Loader';
import { handleLoader } from "./Redux/siteMode/siteModeActions"
import User from './Pages/User/User';
// Create your Own theme:
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#25CCF7'
    },
    secondary: {
      main: '#BA2F16'
    }
  }
});

function App({firebaseAuthListner, auth, isLoading, handleLoader}) {
  useEffect(() => {
    firebaseAuthListner()
  }, [])
  return (
      <MuiThemeProvider theme={theme}>
        {isLoading ? <Loader/> : ''}
        <Switch>
          <Route path="/" component={auth ? Dashboard:Signin} exact />
          <Route path="/signup" component={auth ? Dashboard:Signup} exact />
          <Route path="/user" component={User} exact/>
          <Route path="/dashboard" component={Dashboard} exact/>
          <Route path="/movie/:movieId" component={Movie} exact/>
          <Route path="*">
            <h1>404 Not Found</h1>
          </Route>
        </Switch>
      </MuiThemeProvider>
  );
}

var mapStatesToProps = (state) => {
  return {
    auth: state.auth,
    isLoading: state.themeMode.isLoading
  }
}

var actions = {
  firebaseAuthListner,
  handleLoader
}

export default connect(mapStatesToProps,actions)(App);
