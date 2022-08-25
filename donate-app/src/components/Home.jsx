import React from "react";
// import { Link } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import ThreeColumns from "./ThreeColumns";
import Navigation from "./Navigation";
import Steps from "./Steps";

const Home = () => {
  return (
    <>
      <Navigation />
      <HomeHeader />
      <ThreeColumns />
      <Steps />
    </>
  );
};

export default Home;
