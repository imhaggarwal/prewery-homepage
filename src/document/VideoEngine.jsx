

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "../component/App.module.scss";
import '../component/Hero.css'

const VideoEngine = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // 1. Video Animation Timeline
  // Scales up from 0 to 0.7, then pauses from 0.7 to 1.0
  const point4 = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1.25, 1.25]);

 
  // const footerY = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], ["0%", "90%", "190%", "0%"]);
  // const footerOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 0, 0, 1]);

  const footerY = useTransform(scrollYProgress, [0, 0.05, 1], ["0%", "150%", "150%"]);
  const footerOpacity = useTransform(scrollYProgress, [0, 0.05, 1], [1, 0, 0]);

  const arrow = [
    {
      src: "./src/assets/JAUHARI FINAL VIDEO.mov",
      scale: point4,
    },
  ];

  const brandNames = ['Adobe', 'Airmeet', 'amazon', 'amazon pay', 'Apollo Hospitals', 'AXIS BANK', 'BINANCE', 'darwinbox', 'Deloitte'];
  const duplicateBrands = [...brandNames, ...brandNames];

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          One Ecosystem That Transforms <br /> Briefs into{" "}
          <span className="highlight">Campaigns.</span>
        </h1>
        <p className="subtitle">
          We're a team of 50+ Specialists delivering award-winning work for 80+
          brands worldwide, 5 years and counting!
        </p>
        <div className="cta-group">
          <button className="btn-accent">Schedule Time</button>
          <a href="#casestudies" className="text-link">
            View Casestudies &rarr;
          </a>
        </div>
      </div>

      <div ref={container} className={styles.container}>
        <div className={styles.sticky}>
          {arrow.map(({ src, scale }, index) => (
            <motion.div key={index} style={{ scale }} className={styles.el}>
              <div className="imageContainer">
                <video 
                  src={src} 
                  alt="video" 
                  fill="true" 
                  controls 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                ></video>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. The Animated Fixed Footer */}
      {/* We apply the Framer Motion variables directly to the style prop */}
      <motion.div 
        className="brands-container"
        style={{ 
          y: footerY, 
          opacity: footerOpacity 
        }}
      >
        <div className="brands-track">
          {duplicateBrands.map((brand, index) => (
            <span key={index} className="brand-logo-mock">{brand}</span>
          ))}
        </div>
      </motion.div>
      
    </section>
  );
};

export default VideoEngine;
