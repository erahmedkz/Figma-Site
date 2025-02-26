import React from 'react';
import teamImage from '../../photo/team2.png';

function OurTeam() {
  return (
    <div className="ourTeamContainer">
      <div className="ourTeamTextSection">
        <h2 className="ourTeamTitle">Our team of creatives</h2>
        <p className="ourTeamDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        <p className="ourTeamLongDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </p>
      </div>
      <div className="ourTeamImageSection">
        <div className="ourTeamYellowShape"></div>
        <img src={teamImage} alt="Our Team" className="ourTeamImage" />
      </div>
    </div>
  );
}

export default OurTeam;