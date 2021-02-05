import React from "react";

import s from "./MonsterTruck.module.scss";

import MonsterTruckImg from "./assets/monster-truck.png";

const MonsterTruck = () => {
  return (
    <section className={s.monsterTruck}>
      <div className={s.monsterTruck_description}>
        <h2>Monster Truck Championship Review</h2>
        <p>
          Massive tyres, 1,6000HP engines, insane jumps and incredible drivers
          who are willing to crash, bash and trash their vehicles in the name of
          competition and entertainment...
        </p>

        <div>
          <span>May 20</span>
          <a href="/blog" title="Read more">
            Read more
          </a>
        </div>
      </div>

      <div className={s.monsterTruck_img}>
        <img src={MonsterTruckImg} alt="img" />
      </div>
    </section>
  );
};

export default MonsterTruck;
