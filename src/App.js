import './App.css';
import { Switch,Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import { useEffect } from "react";
import { firebaseAuthListner } from "./Redux/auth/authAction";
import { connect } from 'react-redux';
import Auth from './Pages/Auth/Auth';
import Dashboard from './Pages/Dashboard/Dashboard';
import Movie from './Pages/Movie/Movie';

function App({firebaseAuthListner}) {

  useEffect(() => {
    firebaseAuthListner()
  }, [])

  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/auth" component={Auth} exact/>
        <Route path="/dashboard/:userId" component={Dashboard} exact/>
        <Route path="/movie/:movieId" component={Movie} exact/>
      </Switch>
    </div>
  );
}

var actions = {
  firebaseAuthListner
}

export default connect(null,actions)(App);
