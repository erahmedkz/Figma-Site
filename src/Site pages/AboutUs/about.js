import React from 'react';
import Aboutphoto from '../../photo/Aboutphoto.png';

function AboutUs() {
  return (
    <div className="abbContainer">
      <div className="abbTopContainer">
        <div className="abbTextSection">
          <p className="abbSectionLabel">About Us</p>
          <h2 className="abbTitle">
            We are a team of content writers who share their learnings
          </h2>
          <p className="abbDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="abbImageSection">
        <img
          src={Aboutphoto}
          alt="Team collaborating"
          className="abbImage"
        />
        <div className="abbStatsContainer">
          <div className="abbStat">
            <div className="abbStatValue">12+</div>
            <div className="abbStatLabel">Blogs Published</div>
          </div>
          <div className="abbStat">
            <div className="abbStatValue">18K+</div>
            <div className="abbStatLabel">Views on Finsweet</div>
          </div>
          <div className="abbStat">
            <div className="abbStatValue">30K+</div>
            <div className="abbStatLabel">Total active Users</div>
          </div>
        </div>
      </div>
      <div className="abbMissionVisionSection">
        <div className="abbMissionVisionWrapper max-w-7xl">
          <div className="abbMission">
            <h3 className="abbMissionVisionTitle">OUR MISSION</h3>
            <h3 className="abbMissionVisionTitle">Creating valuable content for creatives all around the world</h3>
            <p className="abbMissionVisionDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
          </div>
          <div className="abbVision">
            <h3 className="abbMissionVisionTitle">OUR VISION</h3>
            <h3 className="abbMissionVisionTitle">A platform that empowers individuals to improve</h3>
            <p className="abbMissionVisionDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;