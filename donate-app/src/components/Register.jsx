import React from "react";
import Navigation from "./Navigation.jsx";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";

const Register = () => {
  return (
    <section className="login">
      <Navigation />

      <div className="login__container">
        <h2 className="login__title">Zaloguj się</h2>
        <Decoration />
        <div className="login__boxes">
          <div className="login__box">
            <label htmlFor="login-email" className="login__label">
              Email
            </label>
            <input
              type="email"
              className="login__input"
              id="login-email"
            ></input>
          </div>
          <div className="login__box">
            <label htmlFor="login-pass" className="login__label">
              Hasło
            </label>
            <input
              type="password"
              className="login__input"
              id="login-pass"
            ></input>
          </div>
          <div className="login__box">
            <label htmlFor="login-pass-2" className="login__label">
              Powtrórz hasło
            </label>
            <input
              type="password"
              className="login__input"
              id="login-pass-2"
            ></input>
          </div>
        </div>
        <div className="login__buttons">
          <button className="login__btn">Załóż konto</button>
          <button className="login__btn">Zaloguj się</button>
        </div>
      </div>
    </section>
  );
};

export default Register;
