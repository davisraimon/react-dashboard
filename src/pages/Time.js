import React from 'react';
import Times from "../components/Times"
import '../components/Settings.css'
import "bootstrap/dist/css/bootstrap.min.css";


class Time extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    timeLeftInSecond: Number.parseInt(1, 10) * 60,
    currentPhase: false,
    }
    this.decreaseTimer = this.decreaseTimer.bind(this);  
    this.onStart = this.onStart.bind(this)
    this.onReset = this.onReset.bind(this)
    this.onChangePhase = this.onChangePhase.bind(this)
    
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
    this.setState({timeLeftInSecond: Number.parseInt(3, 10) * 60})
    this.onChangePhase()
    clearInterval(this.timerInterval)
  }

  onChangePhase(){
    console.log("Phase Changed")
    this.setState({currentPhase:!this.state.currentPhase})
     
  }
  render() {
    return (
      <div>

        <Times timeLabel='CountDown' timeLeftInSecond={this.state.timeLeftInSecond}></Times> 
        <div className='settings'>
        <div style={{padding:10}} >
        <button onClick={this.onStart}>start</button>         
        <button onClick={this.onReset}>reset</button> 
        </div>
        </div>
      </div>
      
    );
  }
}


export default Time;
