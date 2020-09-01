import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import {HashRouter as Router,HashRouter,Route,Switch,Link,Redirect} from 'react-router-dom';
import MainPage from "./pages/index";
import dashboard from "./pages/dashboard";
import forgot from "./pages/forgot";
import sign from "./pages/sign";
import payments from "./pages/payments";
import status from "./pages/status";


class App extends Component {

  render() {

      return( 
       <Router basename='/pages'>
        <Route exact path="/" component ={MainPage}/> 
        <Route path="/dashboard" component ={dashboard}/> 
        <Route path="/forgot" component ={forgot}/> 
        <Route path="/sign" component ={sign}/> 
        <Route path="/payments" component ={payments}/> 
        <Route path="/status" component ={status}/> 
       </Router>

      );
  }
}

export default App;
