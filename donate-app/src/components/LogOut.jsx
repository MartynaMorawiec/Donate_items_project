import React from "react";
import Navigation from "./Navigation.jsx";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import { Link } from "react-router-dom";

const LogOut = () => {
  return (
    <section className="login">
      <Navigation />
      <div className="login__container">
        <h2 className="login__title">
          Wylogowanie nastąpiło
          <br /> pomyślnie!
        </h2>
        <Decoration />
        <div className="login__buttons">
          <Link
            to="/"
            className="login__btn"
            style={{ border: "1px solid black" }}
          >
            Strona główna
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LogOut;
