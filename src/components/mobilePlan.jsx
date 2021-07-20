import React, { Component } from 'react';
import ListImage from '../static/check.png';

class MobilePlan extends Component {
  render() {
    const { headerTitle, dataAlowed, dataEU, minSms, ctaButton, price, contractLength, features, period } =
      this.props.plan;
    return (
      <div className="mobile-plan">
        <h5 className="plan__header">{headerTitle}</h5>
        <h2 className="plan__dataAllow">{dataAlowed} GB</h2>
        <small className="plan__dataEU">Iš jų {dataEU} GB ES/EEE</small>
        <p className="plan__min-sms">{minSms}</p>
        <div className="plan__features">
          <div className="hr"></div>
          <ul className="features__list">
            {features?.length > 0 &&
              features.map((f) => (
                <li key={f.title}>
                  <img className="features__check" src={ListImage} alt="check" />
                  <span>{f.title}</span>
                </li>
              ))}
          </ul>
          <div className="hr"></div>
        </div>
        <div className="plan__bottom">
          <div className="bottom__price-part">
            <h3 className="bottom__price">
              {/* {price && price.commitment} <span>€/men</span> */}
              {this.props.beIsipareigojimu ? price?.noCommitment : price?.commitment} <span>€/{period}</span>
            </h3>
            <small className="bottom__term">{contractLength?.commitment}</small>
          </div>
          <button className="plan__cta">{ctaButton}</button>
        </div>
      </div>
    );
  }
}

export default MobilePlan;
