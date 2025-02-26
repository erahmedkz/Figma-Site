import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '../photo/facebook2.png';
import TwitterIcon from '../photo/twitter2.png';
import InstagramIcon from '../photo/instagram2.png';
import LinkedInIcon from '../photo/linkendin2.png';

function Footer() {
  return (
    <footer className="footerContainer">
      <div className="footerTop">
        <div className="footerLogo">
          <span className="footerLogoBrace">{"{"}</span>
          <span>Finsweet</span>
        </div>
        <nav className="footerNav">
          <Link to="/" className="footerNavLink">Home</Link>
          <a href="#" className="footerNavLink">Blog</a>
          <Link to="/aboutUs" className="footerNavLink">About us</Link>
          <Link to="/contact" className="footerNavLink">Contact us</Link>
          <a href="#" className="footerNavLink">Privacy Policy</a>
        </nav>
      </div>
      <div className="footerSubscribeSection">
        <div className="subscribeContainer">
          <h2 className="footerSubscribeTitle">Subscribe to our news letter to get latest updates and news</h2>
          <div className="footerSubscribeForm">
            <input type="email" placeholder="Enter Your Email" className="footerEmailInput" />
            <button className="footerSubscribeButton">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footerInfoSection">
        <div className="footerContactInfo">
          <p className="footerAddress">Finstreet 118 2561 Fintown</p>
          <p className="footerContact">Hello@finsweet.com  020 7993 2905</p>
        </div>
        <div className="footerSocialIcons">
          <a href="#" className="footerSocialLink">
            <img src={FacebookIcon} alt="Facebook" className="footerSocialIcon" />
          </a>
          <a href="#" className="footerSocialLink">
            <img src={TwitterIcon} alt="Twitter" className="footerSocialIcon" />
          </a>
          <a href="#" className="footerSocialLink">
            <img src={InstagramIcon} alt="Instagram" className="footerSocialIcon" />
          </a>
          <a href="#" className="footerSocialLink">
            <img src={LinkedInIcon} alt="LinkedIn" className="footerSocialIcon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

