import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";

const HomeHeader = () => {
  return (
    <>
      <div className="header">
        <div className="header__img"></div>
        <div className="header__container">
          <div className="header__top">
            <Link to="/logowanie" className="header__signin">
              Zaloguj
            </Link>
            <Link
              to="/rejestracja"
              className="header__signin header__signin-active"
            >
              Załóż konto
            </Link>
          </div>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__element">
                <Scroll
                  to="statistics"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Start
                </Scroll>
              </li>
              <li className="nav__element">
                <Scroll
                  to=""
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  O co chodzi?
                </Scroll>
              </li>
              <li className="nav__element">
                <Scroll
                  to=""
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  O nas
                </Scroll>
              </li>
              <li className="nav__element">
                <Scroll
                  to=""
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Fundacja i organizacje
                </Scroll>
              </li>
              <li className="nav__element">
                <Scroll
                  to=""
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Kontakt
                </Scroll>
              </li>
            </ul>
          </nav>
          <div className="cta">
            <h2>
              Zacznij pomagać! <br />
              Oddaj niechciane rzeczy w zaufane ręce
            </h2>
            <div className="cta__decoration">
              <Decoration />
            </div>
            <div className="cta__buttons">
              <button className="cta__btn">
                <Link to="/logowanie">
                  Oddaj <br />
                  rzeczy
                </Link>
              </button>
              <button className="cta__btn">
                <Link to="/logowanie">
                  Zorganizuj <br />
                  zbiórkę
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
