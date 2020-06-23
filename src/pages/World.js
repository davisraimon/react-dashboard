import React, {useState} from 'react';
import { TablePagination, Typography } from '@material-ui/core';
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

class World extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      countryData : [],
      countryDataSelected : [],
      currentPage : 0,
      global : {}
    }
  this.pageChange = this.pageChange.bind(this);
  }
  pageChange(e,value){
    this.setState({currentPage:value})
    this.setState({countryDataSelected:this.state.countryData.slice(value*5,(value+1)*5)})
  }
  componentWillMount(){
    var a=0,b=0,c=0;
    fetch('https://api.covid19api.com/summary').
    then((response)=>response.json()).
    then((findResponse)=>{console.log(findResponse)
    var list = findResponse.Countries
    list.sort((a, b) => (a.TotalConfirmed > b.TotalConfirmed) ? -1 : 1)
      this.setState({countryDataSelected:list.slice(0,5)})
      this.setState({countryData:list})
      for(var i=0;i<list.length;i++){
        a=a+list[i].TotalConfirmed
        b=b+list[i].TotalDeaths
        c=c+list[i].TotalRecovered
      }
      console.log(a,b,c)
      this.setState({global:findResponse.Global}) 
      console.log('global',findResponse.Global)
    })
  }

  render() {
    return (
      <div>
      <div style={{flexDirection:'row',display:'flex'}}>
      <div>
      <TableContainer style={{width:800,marginTop:48}} component={Paper}>
      <h4 style={{paddingLeft:10}}>WorldWide Corona Cases Summarized</h4>
      <div style={{flexDirection:'row',display:'flex'}}>
        <Tiles value="Confirmed" cardColor="#ffecb3" countTotal={this.state.global.TotalConfirmed} countDelta={this.state.global.NewConfirmed}></Tiles>
        <div style={{width:25}}></div>
        <Tiles value="Recovered" cardColor="#c5e1a5" countTotal={this.state.global.TotalRecovered} countDelta={this.state.global.NewRecovered}></Tiles>
        <div style={{width:25}}></div>
        <Tiles value="Deceased" cardColor="#ef5350" countTotal={this.state.global.TotalDeaths} countDelta={this.state.global.NewDeaths}></Tiles>
      </div>
        <Table size="small" aria-label="a dense table" className="table fadeInUp" style={{animationDelay: '1s'}}>
          <TableHead>
            <TableRow>
              <TableCell style={{width:200}}><b>COUNTRY</b></TableCell>
              <TableCell style={{width:50}} align="right"><b>CONFIRMED</b></TableCell>
              <TableCell style={{width:50}} align="right"><b>DECEASED</b></TableCell>
              <TableCell style={{width:50}} align="right"><b>RECOVERED</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.countryDataSelected.map(row => (
              <TableRow key={row.Country}>
                <TableCell component="th" scope="row">
                  {row.Country}
                </TableCell>
                <TableCell align="right"><Typography variant='caption' color="secondary">+{row.NewConfirmed}</Typography><h6>{row.TotalConfirmed}</h6></TableCell>
                <TableCell align="right"><Typography variant='caption' color="error">+{row.NewDeaths}</Typography><h6>{row.TotalDeaths}</h6></TableCell>
                <TableCell align="right"><Typography variant='caption' color="primary">+{row.NewRecovered}</Typography><h6>{row.TotalRecovered}</h6></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5]}
          component="div"
          count={224}
          rowsPerPage={5}
          page={this.state.currentPage}
          onChangePage={this.pageChange}
        />
      </TableContainer>
      </div>
      <div style={{marginTop:48,paddingLeft:10}}>
      </div>

      </div>
      </div>
    );
  }
}


export default World;
