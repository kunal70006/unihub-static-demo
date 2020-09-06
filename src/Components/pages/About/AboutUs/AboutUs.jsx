import React, { useEffect, useState } from "react";
import "./AboutUs.scss";

import pic1 from "../../../../Assets/about_us_1.png";

const aboutUsContent = `UNIHUB, a website designed by college students for fellow college
students. It is a venture which aims at being a single- handed
platform where there is availability of literature strictly adhering
to university syllabi and comprehensive learning provided through
crisp notes, animated videos and concepts explained through various
audio-visual mediums. Also, besides imparting education through a
better system we have a section with the provision of University
news ranging from examinations to festivals to events. We understand
the hectic life that a college going person like us experiences and
their struggle around the time of examination where there is plenty
to retain in very less time. Education is imparted in the proper
sense when it is understood rather than when information is crammed
up. Our focus is to use practical applications to explain the
concept so that it is better understood. Thereby, we bring to you, a
one stop solution for redefining your understanding of the term “understanding"`;

const downArrouw = (
  <svg
    width="10"
    height="5"
    viewBox="0 0 10 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0L5 5L10 0H0Z" fill="black" />
  </svg>
);

const AboutUs = () => {
  const [expanded, updateExpanded] = useState(false);
  const expandButtonClickHandler = () => updateExpanded(true);
  useEffect(() => {}, [expanded]);

  return (
    <div className="aboutUs">
      <div className="main">
        <h1>The most gorgeous online schools are built </h1>
        <p className={expanded ? "expand" : "shrink"}>{aboutUsContent}</p>
        {expanded ? null : <div className="fadeOut" />}
        {expanded ? null : (
          <button onClick={expandButtonClickHandler}>
            Read More {downArrouw}
          </button>
        )}
      </div>
      <div className="image">
        <img src={pic1} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
