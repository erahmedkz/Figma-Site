import React from "react";
import SpecialT from "../../photo/SpecialT.png";

function SpecialP() {
  return (
    <div className="specialSection">
      <div className="specialContent">
        <img src={SpecialT} alt="Special" className="specialImage" />
        <div className="specialText">
          <h4 className="specialSubtitle">WHY WE STARTED</h4>
          <h2 className="specialTitle">
            It started out as a simple idea and evolved into our passion
          </h2>
          <p className="specialDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
          <button className="specialButton">Discover our story {">"}</button>
        </div>
      </div>
    </div>
  );
}

export default SpecialP;
