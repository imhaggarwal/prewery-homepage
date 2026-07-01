import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Scroll from "./VideoEngine.jsx";
import "./Hero.css";
import "./App.module.scss";

const TextBanner = () => (
  <section className="text-banner">
    <h2>
      We’re <span className="bold-text">brand builders</span> at heart, creators
      by craft, technologists by passion, and integrated growth partners by
      nature.
    </h2>
    <p className="instruction">↓ Click on the logos to view the case study</p>
  </section>
);

export default TextBanner;
