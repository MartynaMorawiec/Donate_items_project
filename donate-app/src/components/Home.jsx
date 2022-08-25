import React from "react";
// import { Link } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import ThreeColumns from "./ThreeColumns";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <>
      <Navigation />
      <HomeHeader />
      <ThreeColumns />
      {/* <Link to="/oddaj-rzeczy">Form</Link>
      <Link to="/wylogowano">Log out</Link> */}
    </>
  );
};

export default Home;
