import React from 'react';

function MainBanner() {
  return (
    <div className="mainBannerSection">
      <div className="bannerBackground"></div>
      <div className="bannerOverlay"></div>
      <div className="bannerContent">
        <p className="contentCategory">POSTED ON STARTUP</p>
        <h1 className="bannerHeading">Step-by-step guide to choosing great font pairs</h1>
        <p className="authorDetails">By James West | May 23, 2022</p>
        <p className="bannerDescription">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        <button className="primaryButton">Read More {">"}</button>
      </div>
    </div>
  );
}

export default MainBanner;