import React from "react";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import { Link } from "react-router-dom";

const Steps = () => {
  return (
    <>
      <section className="steps" id="steps">
        <div>
          <h2 className="steps__title">Wystarczą 4 proste kroki</h2>
          <div className="steps__decoration">
            <Decoration />
          </div>
        </div>
        <div className="steps__container">
          <div className="steps__boxes">
            <div className="steps__box">
              <div className="steps__image"></div>
              <p className="steps__descr">Wybierz rzeczy</p>
              <div className="steps__line"></div>
              <p className="steps__text">ubrania, zabawki, sprzęt i inne</p>
            </div>
            <div className="steps__box">
              <div className="steps__image"></div>
              <p className="steps__descr">Spakuj je</p>
              <div className="steps__line"></div>
              <p className="steps__text">skorzystaj z worków na śmieci</p>
            </div>
            <div className="steps__box">
              <div className="steps__image"></div>
              <p className="steps__descr">Zdecyduj komu chcesz pomóc</p>
              <div className="steps__line"></div>
              <p className="steps__text">wybierz zaufane miejsce</p>
            </div>
            <div className="steps__box">
              <div className="steps__image"></div>
              <p className="steps__descr">Zamów kuriera</p>
              <div className="steps__line"></div>
              <p className="steps__text">
                kurier przyjedzie w dogodnym terminie
              </p>
            </div>
          </div>
        </div>
        <div className="steps__button">
          <button className="steps__btn">
            <Link to="/logowanie">
              ODDAJ <br />
              RZECZY
            </Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default Steps;
