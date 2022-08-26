import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

const Navigation = () => {
  return (
    <>
      <div className="navigation__container">
        <div className="navigation__top">
          <Link to="/logowanie" className="navigation__signin">
            Zaloguj
          </Link>
          <Link
            to="/rejestracja"
            className="navigation__signin navigation__signin-active"
          >
            Załóż konto
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__element">
              <Scroll
                to="start"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                Start
              </Scroll>
            </li>
            <li className="nav__element">
              <Scroll
                to="steps"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                O co chodzi?
              </Scroll>
            </li>
            <li className="nav__element">
              <Scroll
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                O nas
              </Scroll>
            </li>
            <li className="nav__element">
              <Scroll to="" spy={true} smooth={true} offset={50} duration={500}>
                Fundacja i organizacje
              </Scroll>
            </li>
            <li className="nav__element">
              <Scroll to="" spy={true} smooth={true} offset={50} duration={500}>
                Kontakt
              </Scroll>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
