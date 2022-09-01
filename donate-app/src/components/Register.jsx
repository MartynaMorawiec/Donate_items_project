import React, { useState } from "react";
import Navigation from "./Navigation.jsx";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRep, setPasswordRep] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [errorPassRep, setErrorPassRep] = useState(false);

  const checkEmail = (e) => {
    setEmail(e.currentTarget.value);
    const signs = /\S+@\S+\.\S+/;
    if (!signs.test(email)) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
  };

  const checkPassword = (e) => {
    setPassword(e.currentTarget.value);
    if (password.length < 5) {
      setErrorPass(true);
    } else {
      setErrorPass(false);
    }
  };

  const checkPasswordRep = (e) => {
    setPasswordRep(e.currentTarget.value);
    if (password.length < 5 && password === passwordRep) {
      setErrorPassRep(true);
    } else {
      setErrorPassRep(false);
    }
  };

  return (
    <section className="login">
      <Navigation />

      <div className="login__container">
        <h2 className="login__title">Załóż konto</h2>
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
              value={email}
              onChange={checkEmail}
            ></input>
            {errorEmail && (
              <p className="login-err">Podany email jest nieprawidłowy</p>
            )}
          </div>
          <div className="login__box">
            <label htmlFor="login-pass" className="login__label">
              Hasło
            </label>
            <input
              type="password"
              className="login__input"
              id="login-pass"
              value={password}
              onChange={checkPassword}
            ></input>
            {errorPass && (
              <p className="login-err">Podane hasło jest nieprawidłowe</p>
            )}
          </div>
          <div className="login__box">
            <label htmlFor="login-pass-2" className="login__label">
              Powtrórz hasło
            </label>
            <input
              type="password"
              className="login__input"
              id="login-pass-2"
              value={passwordRep}
              onChange={checkPasswordRep}
            ></input>
            {errorPassRep && (
              <p className="login-err">Podane hasło jest nieprawidłowe</p>
            )}
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
