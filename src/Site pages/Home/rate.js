import React from 'react';
import Rate1 from '../../photo/rate1.png';
import BlackT from '../../photo/blackt.png';
import WhiteT from '../../photo/whitet.png';

function Rate() {
  return (
    <div className="rateSectionContainer">
      <div className="rateLeftSection">
        <h4 className="rateTestimonials">TESTIMONIALS</h4>
        <h2 className="rateTitle">What people say about our blog</h2>
        <p className="rateDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
      </div>

      <div className="rateRightSection">
        <p className="rateTestimonialText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="rateAuthorDetails">
          <img src={Rate1} alt="Author" className="rateAuthorImage" />
          <div>
            <p className="rateAuthorName">Jonathan Vallem</p>
            <p className="rateAuthorLocation">New York, USA</p>
          </div>
        </div>
        <div className="rateNavigation">
          <img src={BlackT} alt="Previous" className="rateNavArrow" />
          <img src={WhiteT} alt="Next" className="rateNavArrow" />
        </div>
      </div>
    </div>
  );
}

export default Rate;