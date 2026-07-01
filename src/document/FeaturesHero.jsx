import React from "react";
import "./FeaturesHero.css";
import visualStackImg from "../assets/untitled-design-1.png";

const FeaturesHero = () => {
  return (
    <div className="page-wrapper">
      <section className="hero-container">
        {/* Left Pane: Logic and Text Sequence */}
        <div className="content-column">
          <h5 className="sub-heading">What defines us?</h5>
          <h1 className="main-heading">
            Prewery offers unbeatable <br />
            <strong>Turnaround Time</strong> like no other.
          </h1>
          <p className="description">
            Because great campaigns aren't built in silos. They're built when
            strategy, creativity and execution move as one.
          </p>

          <ul className="feature-list">
            <li>
              <span className="check-icon">✓</span>
              <strong>One Partner Across Every Stage of Growth</strong>
            </li>
            <li>
              <span className="check-icon">✓</span>
              <strong>Seamless Execution Across Multiple Platforms</strong>
            </li>
            <li>
              <span className="check-icon">✔</span>
              <strong>A Curated Network of Creators, Talent & Media</strong>
            </li>
            <li>
              <span className="check-icon">✔</span>
              <strong>Technology-Led Decisions, Human-Led Creativity</strong>
            </li>
          </ul>
        </div>

        {/* Right Pane: Layered Visual Stack */}
        <div className="visual-column">
          <img
            src={visualStackImg}
            alt="Visual Stack"
            className="visual-stack"
          />
        </div>

        {/* Layer 2: White Title Pill */}
        {/* <div className="founders-pill">
          Meet the <em>Founders</em>
        </div> */}
      </section>
    </div>
  );
};

export default FeaturesHero;
