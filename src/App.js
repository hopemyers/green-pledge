import React, { Component } from 'react';
import './App.css';
import Headline from './Headline.js';
import InputComp from './InputComp.js';
import InputPledge from './InputPledge.js';

class App extends Component {

// state goes here

  constructor(props){
    super(props);
    this.state = {
      names: ['Hope', 'Angela', 'Alina', 'Vera'],
      pledges: ["reuse plastic bags", "bike to school", "eat less meat", "turn off the lights"],
      currentName: '',
      currentPledge:'',
    }
  }

  // functions go Here

  showNames = () => {
      // return this.state.names.map((name) => { return <div className="box"><p>{name + "'s pledge:"}</p></div> })
      // how to map a second state within the same div
      let i;
      let boxes = [];
      for(i=0; i<this.state.names.length; i++){
        let name = this.state.names[i];
        let pledge = this.state.pledges[i];
        boxes.push(<div className="box"><p>{name + "'s green pledge:"}</p><p>{"I pledge to " + pledge}</p></div>)
      }
        return boxes;

      // let nameMap = this.state.names.map((name) => <div className="box"> <p> {name} </p></div>);
      // let pledgeMap = this.state.pledges.map((name) => <p> {name} </p> );
      // return nameMap.map((name)=> <div className="box"><p>{name}</p><p>{pledgeMap}</p></div>)
// return <div>{nameMap} {pledgeMap}</div>;
      // <div className="box"><p>{nameMap }</p> <p>{pledgeMap}</p></div>;

  }

addThings = (message, label) => {
  if(label==="name"){
    this.setState({currentName: message})
  }
  else if (label==="pledge") {
    this.setState({currentPledge: message})
  }
}

submitThings = () => {
let newNames = this.state.names.concat(this.state.currentName);
this.setState({names: newNames});
let newPledges = this.state.pledges.concat(this.state.currentPledge);
this.setState({pledges: newPledges});
}

  render() {
    return (
      <div className="App">

        <Headline text={"Green Pledge"}></Headline>
        <p id="description"> Pledge what you will do to help the environment</p>

          <InputComp change={this.addThings} label='name' placeholder="Type your name"></InputComp>
          <InputComp change={this.addThings} label='pledge' placeholder="Type your pledge"></InputComp>

          <div id="center"> <button id="submitbutton" onClick={this.submitThings}>Submit </button></div>

            <div className="display">
            {this.showNames()}
            </div>
          </div>
        );
      }
    }

export default App;
