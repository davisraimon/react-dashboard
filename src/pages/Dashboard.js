import React from 'react';
import DrawerComponent from '../components/Drawer'
import Home from './Home'
import World from './World'


class Dashboard extends React.Component {
  constructor(props){
    super(props);  
    this.state = {
        pageStatus : true
    }
  }
  onClickFunction(value,v){
      if(value=='india'){
          this.setState({pageStatus:true})
          console.log("india")
      }else{
          this.setState({pageStatus:false})
          console.log("world")
      }
  }

  render() {
    return (
    <div>
        <DrawerComponent clickFunction={this.onClickFunction}></DrawerComponent>
        {this.state.pageStatus && <Home></Home>},
        {!this.state.pageStatus && <World></World>}
    </div>
    );
  }
}


export default Dashboard;
