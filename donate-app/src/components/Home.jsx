import React from "react";
// import { Link } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import ThreeColumns from "./ThreeColumns";
import Navigation from "./Navigation";
import Steps from "./Steps";
import About from "./About";

const Home = () => {
  return (
    <>
      <Navigation />
      <HomeHeader />
      <ThreeColumns />
      <Steps />
      <About />
    </>
  );
};

export default Home;
