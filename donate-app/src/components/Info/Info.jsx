import React from "react";
import { ReactComponent as Decoration } from "../../assets/Decoration.svg";
import Foundations from "./Foundations";

const Info = () => {
  return (
    <>
      <section className="info">
        <h2 className="info__title">Komu pomagamy?</h2>
        <Decoration />
        <nav className="info__nav">
          <li className="info__element info__element-active">Fundacjom</li>
          <li className="info__element">
            Organizacjom
            <br /> pozarządowym
          </li>
          <li className="info__element">
            Lokalnym
            <br /> zbiórkom
          </li>
        </nav>
        <Foundations />
      </section>
    </>
  );
};

export default Info;
