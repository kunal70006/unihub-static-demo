import React from "react";

import ScrollToTop from "react-scroll-to-top";
import Header from "./Header/Header";
import VideoContainer from "./VideoContainer/VideoContainer";
import Cards from "./Cards/Cards";
import StudyOppurtunities from "./studyOppurtunities/StudyOppurtunities";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div>
      
      <ScrollToTop smooth style={{ padding: "10px", color: "rgb(0,0,0)" }} />
      <Header />
      <VideoContainer />
      <Cards />
      <StudyOppurtunities />
      <Reviews />
    </div>
  );
};

export default Home;
