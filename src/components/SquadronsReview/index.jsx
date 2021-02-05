import React from "react";

import s from "./SquadronsReview.module.scss";

import SpaceshipImg from "./assets/spaceship.png";

const SquadronsReview = () => {
  return (
    <section className={s.squadronsReview}>
      <div className={s.description}>
        <h3>Star Wars: Squadrons Review — Excellent In VR</h3>
        <p>
          The Star Wars license is not what it once was thanks to the new,
          divisive trilogy and the inconsistency of EA’s games...
        </p>

        <div>
          <span>Nov 28th 2020</span>
          <a href="/blog">Read more</a>
        </div>
      </div>
      <div className={s.img}>
        <img src={SpaceshipImg} alt="img" />
      </div>
    </section>
  );
};

export default SquadronsReview;
