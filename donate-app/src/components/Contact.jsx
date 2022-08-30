import React from "react";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="contact__container">
          <div className="contact__image"></div>
          <div className="contact__box">
            <div className="contact__header">
              <h3 className="contact__title">Skontaktuj się z nami</h3>
              <Decoration />
            </div>

            <form className="contact__form">
              <div className="contact__content">
                <div className="contact__info">
                  <label htmlFor="name" className="contact__label">
                    Wpisz swoje imię
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="contact__input"
                    placeholder="Krzysztof"
                    required
                  />
                </div>
                <div className="contact__info">
                  <label htmlFor="email" className="contact__label">
                    Wpisz swój email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="contact__input"
                    placeholder="abc@xyz.pl"
                    required
                  />
                </div>
              </div>
              <div className="contact__info">
                <div className="contact__label">Wpisz swoją wiadomość</div>
                <textarea
                  className="contact__input contact__input-msg"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  rows="5"
                  required
                ></textarea>
              </div>

              <div className="contact__button">
                <button className="contact__btn">Wyślij</button>
              </div>
            </form>
          </div>
        </div>

        <footer className="footer">
          <div className="footer__copy">
            <div className="footer__text">Copyright by Coders Lab</div>
          </div>
          <div className="footer__media">
            <div className="footer__media-fcb"></div>
            <div className="footer__media-inst"></div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Contact;
