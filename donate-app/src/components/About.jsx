import React from "react";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="about__box">
          <div className="about__content">
            <h3 className="about__title">O nas</h3>
            <Decoration />
            <p className="about__text">
              Nori grape silver beet broccoli kombu beet greens fava bean potato
              quandong celery. Bunya nuts black-eyed pea prairie turnip leek
              lentil turnip greens parsnip.
            </p>
            <div className="about__signature">
              <div className="about__signature__img"></div>
            </div>
          </div>
        </div>
        <div className="about__image"></div>
      </section>
    </>
  );
};

export default About;
