import React from 'react';
import Logo1 from '../../photo/logo1.png';
import Logo2 from '../../photo/logo2.png';
import Logo3 from '../../photo/logo3.png';
import Logo4 from '../../photo/logo4.png';
import Logo5 from '../../photo/logo5.png';

const Logos = () => {
  return (
    <div className="logosContainer">
      <span className="logosText">We are Featured in</span>
      <img src={Logo1} alt="Logo 1" className="logoImage" />
      <img src={Logo2} alt="Logo 2" className="logoImage" />
      <img src={Logo3} alt="Logo 3" className="logoImage" />
      <img src={Logo4} alt="Logo 4" className="logoImage" />
      <img src={Logo5} alt="Logo 5" className="logoImage" />
    </div>
  );
};

export default Logos;