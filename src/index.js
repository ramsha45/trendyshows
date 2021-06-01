import React from 'react';
import {
  Router
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  Provider
} from 'react-redux';
import store from './Redux/store';
import history from "./history/history";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render( <
  React.StrictMode >
  <
  Router history = {
    history
  } >
  <
  Provider store = {
    store
  } >
  <
  App / >
  <
  /Provider> <
  /Router> <
  /React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();