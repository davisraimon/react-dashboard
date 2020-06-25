import React from 'react';
import Times from "../components/Times"
import '../components/Settings.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';


class Time extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    timeLeftInSecond: Number.parseInt(1, 10) * 60,
    currentPhase: false,
    buttonLabel:"Start",
    customTime : 1
    }
    this.decreaseTimer = this.decreaseTimer.bind(this);  
    this.onStart = this.onStart.bind(this)
    this.onReset = this.onReset.bind(this)
    this.onChangePhase = this.onChangePhase.bind(this)
    this.onTimeChange = this.onTimeChange.bind(this)
    this.onIncrease = this.onIncrease.bind(this)
    this.onDecrease = this.onDecrease.bind(this)
    
  }
  onIncrease(){
    this.setState({
      timeLeftInSecond: this.state.timeLeftInSecond + 60
    });

  }
  onDecrease(){
    if(this.state.timeLeftInSecond!=60){
    this.setState({
      timeLeftInSecond: this.state.timeLeftInSecond - 60
    });}
  }
  onTimeChange(e){
    console.log(e.target.value)
    if(e.target.value!=''&&e.target.value<=360){
    this.setState({timeLeftInSecond: Number.parseInt(e.target.value, 10) * 60})
    this.setState({customTime: e.target.value})
  
  }
    
  }
  decreaseTimer() {
    if(this.state.timeLeftInSecond==1){
      clearInterval(this.timerInterval)
      this.onChangePhase()
    }
    this.setState({
      timeLeftInSecond: this.state.timeLeftInSecond - 1
    });
  }
  onStart(){
    
    if(this.state.currentPhase != true&&this.state.timeLeftInSecond!=0){
    this.onChangePhase()
    this.timerInterval = setInterval(() => {
      
      this.decreaseTimer();
      
    }, 1000)
    }else if(this.state.currentPhase == true){
    this.onChangePhase() 
    clearInterval(this.timerInterval) 
    }  
  }
  onReset(){
    this.setState({timeLeftInSecond: Number.parseInt(this.state.customTime, 10) * 60})
    this.setState({currentPhase:false})
    this.setState({buttonLabel:"Start"})
    clearInterval(this.timerInterval)
  }

  onChangePhase(){
    console.log("Phase Changed")
    if(!this.state.currentPhase){
      this.setState({buttonLabel:"Stop"})
    }else{
      this.setState({buttonLabel:"Start"})
    }    
    this.setState({currentPhase:!this.state.currentPhase})
 
     
  }
  render() {
    return (
      <div>

        <Times timeLabel='CountDown' timeLeftInSecond={this.state.timeLeftInSecond}></Times>
                
        <div className='settings'> 
        <div style={{padding:10}} >
        <Button disabled={this.state.currentPhase} style={{marginRight:8}} onClick={this.onIncrease}>+</Button>
        <Button onClick={this.onStart}>{this.state.buttonLabel}</Button>         
        <Button style={{marginLeft:8}} onClick={this.onReset}>reset</Button>
        <Button disabled={this.state.currentPhase} style={{marginLeft:8}} onClick={this.onDecrease}>-</Button> 
        </div>
        </div>
        
        <TextField disabled={this.state.currentPhase} defaultValue={1} onChange={this.onTimeChange} style={{width:100,marginLeft:508}} type="number" className="form-control" variant="outlined" />
        
      </div>
      
    );
  }
}


export default Time;
