import React from "react";
import "./About.scss";

import ScrollToTop from "react-scroll-to-top";

import AboutUs from "./AboutUs/AboutUs";

import colors from "../../colors";

const About = () => {
  return (
    <div>
      <ScrollToTop smooth style={{ padding: "10px", color: "rgb(0,0,0)" }} />
      <AboutUs />
      <div className="comingSoon">
        <h1 style={{ color: colors.red }}>Coming Soon</h1>
      </div>
    </div>
  );
};

export default About;
