import React from "react";
import "./App.css"
import dice1 from "./img/dice-1.png"
import dice2 from "./img/dice-2.png"
import dice3 from "./img/dice-3.png"
import dice4 from "./img/dice-4.png"
import dice5 from "./img/dice-5.png"
import dice6 from "./img/dice-6.png"

// const dice = [dice1,dice2,dice3,dice4,dice5,dice6]

class App extends React.Component{

  state = {
    data: {
      one: dice1,
      two: dice2,
      three: dice3,
      four: dice4,
      five: dice5,
      six: dice6,
    },
    currentKey: null,
    currentValue: null,
    rightCounter: 0,
    wrongCounter: 0

  }


  componentDidMount(){
    this.displayKey();
    this.displayValue();
  }

  displayKey(){
    const keys = Object.keys(this.state.data)
    const random = Math.floor(Math.random()*keys.length);
    const key = keys[random]
    this.setState({currentKey: key });
  }
  
  displayValue(){
    const values = Object.values(this.state.data)
    const random = Math.floor(Math.random()*values.length);
    const value = values[random];
    this.setState({currentValue: value });
  }

  isMatch = (key,value,bool)=>{
    if((this.state.data[key]===value)===bool){
      this.setState({ rightCounter: this.state.rightCounter+1})
    }else{
      this.setState({ wrongCounter: this.state.wrongCounter+1})
    }
    this.displayKey();
    this.displayValue();
  }

  reset =()=>{
    this.setState({ rightCounter: 0,
      wrongCounter: 0})
      this.displayKey();
      this.displayValue();
  }


  render(){
    return (
      <>
      <div className="container">
        <div className="game-board">
          <div className="right-wrong">
       <span>right: {this.state.rightCounter}</span> 
       <button onClick={this.reset}>RESET</button>
        <span>wrong: {this.state.wrongCounter}</span>
          </div>
        <div className="value"><img alt="dice" src={this.state.currentValue}/></div>
        <div className="key">{this.state.currentKey}</div>
        <div className="buttons">
          <button onClick={()=>this.isMatch(this.state.currentKey,this.state.currentValue,true)}>yes</button>
          <button onClick={()=>this.isMatch(this.state.currentKey,this.state.currentValue,false)}>no</button>
        </div>
        </div>
      </div>
      </>
    )
  }
} 
export default App
