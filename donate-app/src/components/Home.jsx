import React from "react";
// import { Link } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import ThreeColumns from "./ThreeColumns";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <ThreeColumns />
      {/* <Link to="/oddaj-rzeczy">Form</Link>
      <Link to="/wylogowano">Log out</Link> */}
    </>
  );
};

export default Home;
