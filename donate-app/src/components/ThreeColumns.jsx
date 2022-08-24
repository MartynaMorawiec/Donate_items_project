import React from "react";

const ThreeColumns = () => {
  return (
    <>
      <section className="statistics">
        <div className="statistics__boxes">
          <div className="statistics__box">
            <div className="statistics__number">10</div>
            <h3 className="statistics__title">Oddanych worków</h3>
            <p className="statistics__text">
              Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
              enim a elit viverra elementuma. Aliquam erat volutpat.
            </p>
          </div>
        </div>
        <div className="statistics__box">
          <div className="statistics__number">5</div>
          <h3 className="statistics__title">Wspartych organizacji</h3>
          <p className="statistics__text">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </div>
        <div className="statistics__box">
          <div className="statistics__number">7</div>
          <h3 className="statistics__title">Zorganizowanych zbiórek</h3>
          <p className="statistics__text">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </div>
      </section>
    </>
  );
};

export default ThreeColumns;
