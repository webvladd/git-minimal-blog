import React from "react";

import s from "./BtnShowMore.module.scss";

const BtnShowMore = () => {
  return (
    <section className={s.btnShowMore}>
      <a href="/blog" title="Show more">
        SHOW MORE
      </a>
    </section>
  );
};

export default BtnShowMore;
