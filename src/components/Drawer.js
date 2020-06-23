import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Home from '../pages/Home'
import PublicIcon from '@material-ui/icons/Public';
import HomeIcon from '@material-ui/icons/Home';

class DrawerComponent extends React.Component {
  constructor(props){
    super(props);  
  }
  render() {
    return (
        <div>
            <Drawer open={true} variant="persistent" anchor="left">
            {/* <AppBar style={{height:48}}></AppBar> */}
                <List >
                    <ListItem style={{height:52}} key="HeadSpace"/>
                <Divider />    
                    <ListItem button key="india" onClick={this.props.clickFunction.bind(this,'india')}>
                    <ListItemIcon style={{paddingLeft:15}}><HomeIcon /></ListItemIcon>
                    </ListItem>
                <Divider />
                    <ListItem button key="world" onClick={this.props.clickFunction.bind(this,'world')}>
                    <ListItemIcon style={{paddingLeft:15}}><PublicIcon /></ListItemIcon>
                    </ListItem>
                <Divider />        
                </List>
            </Drawer>
        </div>         
    );
  }
}


export default DrawerComponent;
