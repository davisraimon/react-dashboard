import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import TextField from '@material-ui/core/TextField';
import { Paper, Container, CardContent, Typography } from '@material-ui/core';
import {Card,CardHeader} from '@material-ui/core'

class Tiles extends React.Component {
  constructor(props){
    super(props);  
  }
  
  render() {
    return (
      <div style={{width:160,height:150}}>
      <Card style={{backgroundColor:this.props.cardColor}}>
        <CardContent>
          <Typography variant="h6" color="textSecondary" gutterBottom>
          {this.props.value}
          </Typography>
          <Typography color="textSecondary">
             + {this.props.countDelta}
          </Typography>
          <Typography variant="h5" component="h2" >
            {this.props.countTotal}
          </Typography>
        </CardContent>
      </Card>
      </div>
    );
  }
}


export default Tiles;
