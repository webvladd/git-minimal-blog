import React from "react";

import s from "./HeroCards.module.scss";
import PumpkinJackImg from "./assets/pumpkin-jack.png";
import GhostrunnerReviewImg from "./assets/ghostrunner-review.png";
import HadesReviewImg from "./assets/hades-review.png";

const HeroCards = () => {
  const cardsData = [
    {
      key: 1,
      img: PumpkinJackImg,
      title: "Pumpkin Jack Review",
      text:
        "Back during the days of the Playstation 2, the cheerful, charming mascot platformer was all the rage, from Spyro the Dragon to Crash Bandicoot...",
      date: "Nov 1st 2020",
      nameBtn: "Read more",
      path: "/blog",
    },
    {
      key: 2,
      img: GhostrunnerReviewImg,
      title: "Ghostrunner Review",
      text:
        "With Cyberpunk 2077 having been delayed for the *checks the calendar* 124th time, there’s a bit of a gap in the market for some grungy sci-fi...",
      date: "Oct 16th 2020",
      nameBtn: "Read more",
      path: "/blog",
    },
    {
      key: 3,
      img: HadesReviewImg,
      title: "Hades Review",
      text:
        "Hades spent two years in Early Access before it finally launched proper around a month back. Those two years stand as an example...",
      date: "Oct 3rd 2020",
      nameBtn: "Read more",
      path: "/blog",
    },
  ];
  return (
    <section className={s.heroCards}>
      {cardsData.map(({ key, img, title, text, date, nameBtn, path }) => {
        return (
          <div className={s.heroCards_item} key={key}>
            <img src={img} alt="img" />
            <h4>{title}</h4>
            <p>{text}</p>

            <div>
              <span>{date}</span>
              <a href={path}>{nameBtn}</a>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default HeroCards;
