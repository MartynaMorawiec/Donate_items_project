import React from "react";
import HomeHeader from "./HomeHeader";
import ThreeColumns from "./ThreeColumns";
import Navigation from "./Navigation";
import Steps from "./Steps";
import About from "./About";
import Info from "./Info";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Navigation />
      <HomeHeader />
      <ThreeColumns />
      <Steps />
      <About />
      <Info />
      <Contact />
    </>
  );
};

export default Home;
