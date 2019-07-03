import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {Switch, Route} from 'react-router-dom';
import LogIn from './components/LogIn';
import Home from './components/Home';


function App() {
  return (
    <div>
    <Switch>
    <Route  path='/homepage' component={Home}/ >
    <Route path="/login" component={LogIn}/>
    <Header/>
    </Switch>
    </div>
  );
}

export default App;
