import React from "react";
import SlickSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./Slider.module.scss";
import Slide1 from "./assets/slide1.png";
import Slide2 from "./assets/slide2.png";

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseOnDotsHover: true,
  };

  return (
    <section className={s.slider}>
      <SlickSlider {...settings}>
        <div className={s.slider_item}>
          <img src={Slide1} alt="img" />
          <div className={s.slider_item_text}>
            <h1>Want to play together?</h1>
            <span>12.12.2020</span>
            <div>
              <a href="/blog">JOIN</a>
            </div>
          </div>
        </div>
        <div className={s.slider_item}>
          <img src={Slide2} alt="img" />
          <div className={s.slider_item_text}>
            <h1>Want to play together?</h1>
            <span>12.12.2020</span>
            <div>
              <a href="/blog">JOIN</a>
            </div>
          </div>
        </div>
        <div className={s.slider_item}>
          <img src={Slide1} alt="img" />
          <div className={s.slider_item_text}>
            <h1>Want to play together?</h1>
            <span>12.12.2020</span>
            <div>
              <a href="/blog">JOIN</a>
            </div>
          </div>
        </div>
      </SlickSlider>
    </section>
  );
};

export default Slider;
