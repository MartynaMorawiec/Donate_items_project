import React, { useState } from "react";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";

const fullUrl = `https://fer-api.coderslab.pl/v1/portfolio/contact`;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  console.log(setSuccessMessage);

  const checkName = (e) => {
    setName(e.currentTarget.value);
    if (name.includes(" ")) {
      setErrorName(true);
    } else {
      setErrorName(false);
    }
  };

  const checkEmail = (e) => {
    setEmail(e.currentTarget.value);
    const signs = /\S+@\S+\.\S+/;
    if (!signs.test(email)) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
  };

  const checkMessage = (e) => {
    setMessage(e.currentTarget.value);
    if (e.currentTarget.value.length < 120) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorName && !errorEmail && !errorMessage) {
      fetch(fullUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })
        .then((response) => {
          if (response.status === 200) {
            setSuccessMessage(true);
            return;
          }
          return setSuccessMessage(false);
        })
        .then((data) => console.log(data));

      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <>
      <section className="contact" id="contact">
        <div className="contact__container">
          <div className="contact__image"></div>
          <div className="contact__box">
            <div className="contact__header">
              <h3 className="contact__title">Skontaktuj się z nami</h3>
              <Decoration />
              {successMessage && (
                <p className="contact__valid">
                  Wiadomość została wysłana!
                  <br /> Wkrótce się skontaktujemy.
                </p>
              )}
            </div>

            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__content">
                <div className="contact__info">
                  <label htmlFor="name" className="contact__label">
                    Wpisz swoje imię
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={
                      errorName
                        ? "contact__input contact__input--err"
                        : "contact__input"
                    }
                    placeholder="Krzysztof"
                    value={name}
                    onChange={checkName}
                    required
                  />
                  {errorName && (
                    <p className="contact__msg--err">
                      Podane imię jest nieprawidłowe
                    </p>
                  )}
                </div>
                <div className="contact__info">
                  <label htmlFor="email" className="contact__label">
                    Wpisz swój email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={
                      errorEmail
                        ? "contact__input contact__input--err"
                        : "contact__input"
                    }
                    placeholder="abc@xyz.pl"
                    value={email}
                    onChange={checkEmail}
                    required
                  />
                  {errorEmail && (
                    <p className="contact__msg--err">
                      Podany email jest nieprawidłowy
                    </p>
                  )}
                </div>
              </div>
              <div className="contact__info">
                <div className="contact__label">Wpisz swoją wiadomość</div>
                <textarea
                  className={
                    errorMessage
                      ? "contact__input contact__input-msg contact__input--err"
                      : "contact__input contact__input-msg"
                  }
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  value={message}
                  onChange={checkMessage}
                  rows="4"
                  required
                ></textarea>
                {errorMessage && (
                  <p className="contact__msg--err">
                    Wiadomość musi mieć co najmniej 120 znaków!
                  </p>
                )}
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
