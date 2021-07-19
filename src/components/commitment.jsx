import React, { Component } from 'react';
import CustomRadio from './common/customRadio';

class Commitment extends Component {
  handleRadio = () => {
    console.log('Radio is on');
  };
  render() {
    return (
      <div className="commitment-component">
        <div className="c__selection">
          <span className="c__select">
            <CustomRadio>24 men</CustomRadio>
          </span>
          {/* <span className="c__select-title">24 men</span> */}
        </div>
        <div className="c__selection">
          <span className="c__select"></span>
          <span className="c__select-title">Be isipareigojimu</span>
        </div>
      </div>
    );
  }
}

export default Commitment;
