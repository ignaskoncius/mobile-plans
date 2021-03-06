import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Commitment from './components/commitment';
import HaveServices from './components/haveServices';
import MobilePlan from './components/mobilePlan';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beIsipareigojimu: true,
      mobile1: {},
      allPlans: [],
    };
  }

  async componentDidMount() {
    try {
      const result = await axios.get('/data/allPlans.json');
      this.setState({ allPlans: result.data });
      // console.log(this.state.mobile1);
    } catch (err) {
      console.log(err);
    }
  }

  handleRadio = (value) => {
    if (value === 'commit') {
      this.setState({ beIsipareigojimu: false });
    } else {
      this.setState({ beIsipareigojimu: true });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Mobiliojo ryšio planai</h1>
          <p>Visos Lietuvoje turimo plano naudos galioja Baltijos ir Skandinavijos šalyse.</p>
          <div className="controls d-flex">
            <Commitment handleRadio={this.handleRadio} noCommitment={this.state.beIsipareigojimu} />
            <HaveServices />
          </div>
          <main className="plan-cards">
            {this.state.allPlans.map((plan) => (
              <MobilePlan key={plan.headerTitle} plan={plan} beIsipareigojimu={this.state.beIsipareigojimu} />
            ))}
          </main>
        </div>
      </div>
    );
  }
}

export default App;
