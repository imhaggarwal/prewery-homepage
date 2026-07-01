import React from 'react';
import moonIcon from '../assets/moon.svg'; 

const Navbar = () => {
  return (
    <header className="navbar">
      {/* Left side: Logo */}
      <div className="logo">Prewery.Media</div>
      
      {/* Center side: Fluid links wrapper */}
      <nav className="nav-links">
        <a href="#platform">Platform</a>
        <a href="#services">Services</a>
        <a href="#resources">Resources</a>
        <a href="#talent">Talent </a> {/* Shortened 'Talent Network' to 'Talent' for mobile safety */}
      </nav>
      
      {/* Right side: Actions container */}
      <div className="nav-actions">
        <button className="btn-secondary">Book a Demo</button>
        <button className="btn-primary">Get Started</button>
        <span className="theme-toggle">
          <img src={moonIcon} alt="Dark Mode" />
        </span>
      </div>
    </header>
  );
};

export default Navbar;