import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";

const HomeHeader = () => {
  return (
    <>
      <div className="header" id="start">
        <div className="header__img"></div>
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
    </>
  );
};

export default HomeHeader;
