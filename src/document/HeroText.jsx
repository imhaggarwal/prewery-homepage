import React from 'react';
import '../component/Hero.css'

const HeroText = () => (
  <div className="hero-content">
    <h1>
      One Ecosystem That <br />Transforms <div  className='Hero-text'> Briefs <br />into <span className="highlight">Campaigns.</span></div>
    </h1>
    <p className="subtitle">
      We're a team of 50+ Specialists delivering award-winning work for 80+ brands worldwide.
    </p>
    <div className="cta-group">
      <button className="btn-accent">Schedule Time</button>
      <a href="#casestudies" className="text-link">View Casestudies &rarr;</a>
    </div>
  </div>
);

export default HeroText;