import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="Header">
      <div className="Logo">
        <span className="LogoBrace">{"{"}</span>
        <span>Finsweet</span>
      </div>
      <nav className="Nav">
        <Link to="/" className="NavLink">Home</Link>
        <a href="#" className="NavLink">Blog</a>
        <Link to="/aboutUs" className="NavLink">About us</Link>
        <Link to="/contact" className="NavLink">Contact us</Link>
        <button className="SubscribeButton">Subscribe</button>
      </nav>
    </header>
  );
}

export default Header;