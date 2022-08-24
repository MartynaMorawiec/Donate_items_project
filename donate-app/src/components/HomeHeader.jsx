import React from "react";
import { Link } from "react-router-dom";
// import headerimg from "../../assets/Home-Hero-Image.jpg";
// import "./home-header.styles.scss";

const HomeHeader = () => {
  return (
    <>
      <div className="header">
        <div className="header__img"></div>
        <div className="header__container">
          <div className="header__top">
            <Link
              to="/rejestracja"
              className="header__signin header__signin-active"
            >
              Załóż konto
            </Link>
            <Link to="/logowanie" className="header__signin">
              Zaloguj
            </Link>
          </div>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__element">
                <Link to="">Start</Link>
              </li>
              <li className="nav__element">
                <Link to="">O co chodzi?</Link>
              </li>
              <li className="nav__element">
                <Link to="">O nas</Link>
              </li>
              <li className="nav__element">
                <Link to="">Fundacja i organizacje</Link>
              </li>
              <li className="nav__element">
                <Link to="">Kontakt</Link>
              </li>
            </ul>
          </nav>
          <div className="cta">
            <h2>
              Zacznij pomagać! <br />
              Oddaj niechciane rzeczy w zaufane ręce
            </h2>
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
