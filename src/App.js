import React, { Component } from 'react';
import './App.css';

import Range from './components/Range.jsx';
import Output from './components/Output.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 170,
      weight: 65,
      bmi: 22.49,
      bmiClass: 'Normal'
    }
  }

  heightChange(height) {
    this.setState({height: height}, this.setBmi)
  }

  weightChange(weight) {
    this.setState({weight: weight}, this.setBmi)
  }

  setBmi() {
    let bmi = ((this.state.weight / this.state.height / this.state.height) * 10000).toFixed(2)
    this.setState({
      bmi: bmi,
      bmiClass: this.getBmiClass(bmi)
    }, function() {
      //console.log(this.state)
    })
  }

  getBmiClass(bmi) {
    if(bmi < 18.5 ) return 'Underweight';
    if(bmi >= 18.5 && bmi <= 24.9 ) return 'Normal';
    if(bmi >= 25 && bmi <= 29.9 ) return 'Overweight';
    if(bmi >= 30 ) return 'Obeast!!!';
  }
  render() {
    return (
      <div className="App container">
        <h1>BMI Calculator</h1>
        <form>  
          <div>
            <label>Height</label>
            <Range value={this.state.height} onChange={this.heightChange.bind(this)}/>
          </div>
          <div>
            <label>Weight</label>
            <Range value={this.state.weight} onChange={this.weightChange.bind(this)}/>
          </div>
        </form>
        <br/><br/>
        <Output data={this.state}/>
      </div>
    );
  }
}

export default App;
