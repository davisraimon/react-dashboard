import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends React.Component {
  constructor(props){
    super(props);  
  }
  
  render() {
    return (
      <Router>
        <div className="container">
          <h2>You are now in Home Page</h2>
        </div>
      </Router>
    );
  }
}


export default Home;
