import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TextField from '@material-ui/core/TextField';
import { Paper, Container } from '@material-ui/core';

class Login extends React.Component {
  constructor(props){
    super(props);  
  }
  
  render() {
    return (
      <Router>
            <form>
            <Container>
            <Paper style={{width:500,marginLeft:300,marginTop:120}}>  
                <h3 style={{padding:10}}>Sign In</h3>

                <div className="form-group" style={{padding:10}}>
                    <TextField type="email" className="form-control" label="Email" variant="outlined"  />
                </div>

                <div className="form-group" style={{padding:10}}>
                    <TextField type="password" className="form-control" label="Password" variant="outlined" />
                </div>

                <div className="form-group" style={{padding:10}}>
                    <div className="custom-control custom-checkbox" >
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <div style={{padding:10}}><button type="submit" className="btn btn-primary btn-block" >Submit</button></div>
                <p style={{padding:10}} className="forgot-password text-right">
                    <a href="#">Forgot password?</a>
                </p>
            </Paper>
            </Container>      
            </form>
      </Router>
    );
  }
}


export default Login;
