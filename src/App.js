import './App.css';
import { Switch,Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import { useEffect } from "react";
import { firebaseAuthListner } from "./Redux/auth/authAction";
import { connect } from 'react-redux';
import Auth from './Pages/Auth/Auth';
import Dashboard from './Pages/Dashboard/Dashboard';
import Movie from './Pages/Movie/Movie';
import Signin from './Pages/Signin/Signin';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Signup from './Pages/Signup/Signup';

// Create your Own theme:
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#25CCF7'
    },
    secondary: {
      main: '#BA2F16'
    },
  }
});

function App({firebaseAuthListner, auth}) {
  useEffect(() => {
    firebaseAuthListner()
  }, [])

  return (
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={auth ? Home:Signin} exact />
        <Route path="/signup" component={auth ? Home:Signup} exact />
        <Route path="/auth" component={Auth} exact/>
        <Route path="/dashboard/:userId" component={Dashboard} exact/>
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
    auth: state.auth
  }
}

var actions = {
  firebaseAuthListner
}

export default connect(mapStatesToProps,actions)(App);
