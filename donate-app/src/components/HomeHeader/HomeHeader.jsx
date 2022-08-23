import React from "react";
import { NavLink, Link } from "react-router-dom";
// import headerimg from "../../assets/Home-Hero-Image.jpg";
import "./home-header.styles.scss";

const HomeHeader = () => {
  return (
    <>
      <div className="header">
        <div className="header__img"></div>
        <div className="container">
          <Link to="/logowanie">Zaloguj</Link>
          <Link to="/rejestracja">Załóż konto</Link>
          <nav>
            <ul>
              <li>
                <NavLink to="start">Start</NavLink>
              </li>
              <li>
                <NavLink to="start">O co chodzi?</NavLink>
              </li>
              <li>
                <NavLink to="start">O nas</NavLink>
              </li>
              <li>
                <NavLink to="start">Fundacja i organizacje</NavLink>
              </li>
              <li>
                <NavLink to="start">Kontakt</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
