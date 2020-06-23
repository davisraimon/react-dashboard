import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { AppBar } from '@material-ui/core';
import Tiles from '../components/Tiles'
import Grid from '@material-ui/core/Grid';
import Map from '../components/Map'
import DrawerComponent from '../components/Drawer'





class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stateData : [],
      consolidatedDeltaCount : [],
      consolidatedCount : []
    }
    const clientID = 'rXMuQe8V4XLaYeLoefdvlj7nB2BAUKd8';
    const domainName = 'dev-vknx01a2.auth0.com';
    this.getDatafromJSON = this.getDatafromJSON.bind(this);
  }
  createRows(){
    this.getDatafromJSON()
  }

  getDatafromJSON(){
    fetch('https://api.covid19india.org/data.json').
    then((response)=>response.json()).
    then((findResponse)=>this.setState({stateData:findResponse.statewise.slice(1)}))
  }
  componentDidMount(){
    fetch('https://api.covid19india.org/data.json').
    then((response)=>response.json()).
    then((findResponse)=>{
      this.setState({consolidatedDeltaCount:findResponse.statewise[0]});
      this.setState({consolidatedCount:findResponse.statewise[0]})
    })
  }
  


  render(){
  return (
    <div>
    <div style={{flexDirection:'row',display:'flex'}}>
    <TableContainer style={{width:700,marginTop:60}} component={Paper}>
    <h4 style={{paddingLeft:10}}>Corona Cases Across INDIA Summarized</h4>
    <div style={{flexDirection:'row',display:'flex'}}>
        <Tiles value="Confirmed" cardColor="#ffecb3" countTotal={this.state.consolidatedCount.confirmed} countDelta={this.state.consolidatedDeltaCount.deltaconfirmed}></Tiles>
        <div style={{width:25}}></div>
        <Tiles value="Recovered" cardColor="#c5e1a5" countTotal={this.state.consolidatedCount.recovered} countDelta={this.state.consolidatedDeltaCount.deltarecovered}></Tiles>
        <div style={{width:25}}></div>
        <Tiles value="Deceased" cardColor="#ef5350" countTotal={this.state.consolidatedCount.deaths} countDelta={this.state.consolidatedDeltaCount.deltadeaths}></Tiles>
    </div>
      <Table size="small" aria-label="a dense table" className="table fadeInUp" style={{animationDelay: '1s'}}>
        <TableHead>
          <TableRow>
            <TableCell style={{width:130}}><b>STATE/UT</b></TableCell>
            <TableCell style={{width:30}} align="right"><b>CONFIRMED</b></TableCell>
            <TableCell style={{width:30}} align="right"><b>ACTIVE</b></TableCell>
            <TableCell style={{width:30}} align="right"><b>RECOVERED</b></TableCell>
            <TableCell style={{width:30}} align="right"><b>DECEASED</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.stateData.map(row => (
            <TableRow key={row.state}>
              <TableCell component="th" scope="row">
                {row.state}
              </TableCell>
              <TableCell align="right">{row.confirmed}</TableCell>
              <TableCell align="right">{row.active}</TableCell>
              <TableCell align="right">{row.recovered}</TableCell>
              <TableCell align="right">{row.deaths}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {this.createRows()}
    </TableContainer>
    <div>
         <Map data={this.state.stateData}></Map>   
    </div>
    </div>
    </div>
  );
  }
}

export default Home;