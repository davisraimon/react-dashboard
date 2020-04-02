import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home'
import Login from './pages/Login'
import World from './pages/World'

class App extends React.Component {
  constructor(props){
    super(props);  
  }
  
  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/world" component={World} />
        </div>
      </Router>
    );
  }
}


export default App;
