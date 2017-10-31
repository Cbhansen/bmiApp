import React, { Component } from 'react';

class Output extends Component {
  toFeet(n) {
    let realFeet = ((n* 393700 / 12));
    let feet = Math.floor(realFeet);
    let inches = Math.round((realFeet - feet) * 12);
    return feet = "'" + inches
  }

  toLbs(n) {
    let nearExact = n/0.45359237;
    let lbs = Math.floor(nearExact);
    return lbs;
  }
  render() {
    let height = this.toFeet(this.props.data.height);
    let weight = this.toLbs(this.props.data.weight);
    let bmi = this.props.data.bmi;
    let bmiClass = this.props.data.bmiClass;
    return (
      <div className="Output">
          <h3>Height: {height}</h3>
          <h3>Weight: {weight}</h3>
          <h3>BMI: {bmi}</h3>
          <h3 className={(this.props.data.bmiClass === "Obeast!!!") ? "Danger" : ""} >BMI Class: {bmiClass} {(this.props.data.bmiClass === "Obeast!!!") ? <a target="_blank" href='https://www.weightwatchers.com/us/'>What can I do?</a> : ""}</h3>
      </div>
    );
  }
}

export default Output;
