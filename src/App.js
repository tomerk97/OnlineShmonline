import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,HashRouter,Route,Switch,Link,Redirect} from 'react-router-dom';
import MainPage from "./pages/index";
import dashboard from "./pages/dashboard";
import forgot from "./pages/forgot";
import sign from "./pages/sign";
import payments from "./pages/payments";
import status from "./pages/status";


class App extends Component {

  render() {
      const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
        </Switch>
      </div>
    )


      return( 
       <Switch basename='/'>
        <Route exact path="/" component ={MainPage}/> 
        <Route path="/dashboard" component ={dashboard}/> 
        <Route path="/forgot" component ={forgot}/> 
        <Route path="/sign" component ={sign}/> 
        <Route path="/payments" component ={payments}/> 
        <Route path="/status" component ={status}/> 
       </Switch>

      );
  }
}

export default App;
