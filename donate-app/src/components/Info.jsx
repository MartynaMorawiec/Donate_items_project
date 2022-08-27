import React, { useState } from "react";
import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import Foundations from "./InfoTab";
import {
  foundationsdesc,
  organisationsdesc,
  localdesc,
  foundations,
  organisations,
  local,
} from "../constants/constants";

const Info = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTab1 = () => {
    setActiveTab(1);
  };
  const handleTab2 = () => {
    setActiveTab(2);
  };
  const handleTab3 = () => {
    setActiveTab(3);
  };

  return (
    <>
      <section className="info" id="info">
        <h2 className="info__title">Komu pomagamy?</h2>
        <Decoration />
        <div className="info__buttons">
          <button
            className={
              activeTab === 1 ? "info__btn info__btn-active" : "info__btn"
            }
            onClick={handleTab1}
          >
            Fundacjom
          </button>
          <button
            className={
              activeTab === 2 ? "info__btn info__btn-active" : "info__btn"
            }
            onClick={handleTab2}
          >
            Organizacjom
            <br /> pozarządowym
          </button>
          <button
            className={
              activeTab === 3 ? "info__btn info__btn-active" : "info__btn"
            }
            onClick={handleTab3}
          >
            Lokalnym
            <br /> zbiórkom
          </button>
        </div>
        {activeTab === 1 && (
          <Foundations
            foundations={foundations}
            description={foundationsdesc}
          />
        )}
        {activeTab === 2 && (
          <Foundations
            foundations={organisations}
            description={organisationsdesc}
          />
        )}
        {activeTab === 3 && (
          <Foundations foundations={local} description={localdesc} />
        )}
      </section>
    </>
  );
};

export default Info;
