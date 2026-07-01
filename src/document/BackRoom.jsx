import React from "react";
import "./BackRoom.css";

const Videoh = () => {
  return (
    <>
<footer className="prewery-footer">
      <div className="footer-brand">
        <h1>PREWERY</h1>
      </div>
      
      <hr className="footer-divider" />
      
      <div className="footer-bottom">
        <div className="social-icons">
          {/* Using text/CSS to mimic the icon blocks logically */}
          <div className="icon">in</div>
          <div className="icon ig-icon">ig</div>
          <div className="icon">yt</div>
          <div className="icon">fb</div>
        </div>
        
        <nav className="footer-nav">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#cases">Case Studies</a>
          <a href="#blog">Blog</a>
          <a href="#privacy">Privacy</a>
        </nav>
        
        <div className="footer-copyright">
          <p>Proudly created in India.</p>
          <p>All Rights Reserved, All Wrongs Reversed.</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Videoh;
