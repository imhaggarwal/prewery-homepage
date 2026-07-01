import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import styles from "../component/App.module.scss";

import TopBar from "../document/TopBar";
import Navbar from "../document/Navbar";
import Header from "../document/Header";
import HeroText from "../document/HeroText";
import VideoEngine from "../document/VideoEngine";
import BrandsFooter from "../document/Brand";
import Page2 from "../document/Page2";

const Hero = () => {
  const brandNames = [
    "Adobe",
    "Airmeet",
    "amazon",
    "amazon pay",
    "Apollo Hospitals",
    "AXIS BANK",
    "BINANCE",
    "darwinbox",
    "Deloitte",
  ];
  const duplicateBrands = [...brandNames, ...brandNames];

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className="mobile-viewport-wrapper">
      <TopBar />
      <Header />

      <section className="hero">
        {/* <HeroText /> */}

        {/* The target container generating the scrollYProgress data */}
        <div ref={container} className={styles.container}>
          {/* Feed the scroll data into the video */}
          <VideoEngine scrollYProgress={scrollYProgress} />
        </div>

        {/* The Window (Stops the overflow) */}
        <div className="branch-wrapper">
          {/* The Train (Holds the wide logos and moves) */}
          <div className="branch">
            {duplicateBrands.map((brand, index) => (
              <span key={index} className="brand-logo-mock">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
