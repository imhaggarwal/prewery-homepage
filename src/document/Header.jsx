import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import moonIcon from '../assets/moon.svg'
import Scroll from "./VideoEngine.jsx";
import "../component/Hero.css";
import "../component/App.module.scss";

const Header = () => (
  <header className="navbar">
    <div className="logo">Prewery.Media</div>
    <nav className="nav-links">
      <a href="#platform">Platform</a>
      <a href="#services">Services</a>
      <a href="#resources">Resources</a>
      <a href="#talent">Talent Network</a>
    </nav>
    <div className="nav-actions">
      <button className="btn-secondary">Book a Demo</button>
      <button className="btn-primary">Get Started</button>

      <span className="theme-toggle">
        <img  className = " moon" src={moonIcon} alt="Dark Mode" />
      </span>
    </div>
  </header>
);

export default Header;
