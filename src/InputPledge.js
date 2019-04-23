import React, { Component } from 'react';
import './App.css';

class InputPledge extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPledge: "",
    }
  }

  // updatePledge = (event) => {
  //   this.setState({
  //     currentPledge: event.target.value
  //   });
  // }
  submitPledge = (event) => {
    this.props.change(event.target.value, this.props.label);

  }

  render() {
    return (
      <div className="inputPledge">
        <input placeholder="Type your pledge..." onChange={this.submitPledge}></input>
      </div>
    );
  }
}

export default InputPledge;
