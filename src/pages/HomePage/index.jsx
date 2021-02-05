import React from "react";
import BtnShowMore from "../../components/BtnShowMore";
import HeroCards from "../../components/HeroCards";
import MonsterTruck from "../../components/MonsterTruck";
import Slider from "../../components/Slider";
import SquadronsReview from "../../components/SquadronsReview";

const HomePage = () => {
  return (
    <>
      <Slider />
      <SquadronsReview />
      <HeroCards />
      <MonsterTruck />
      <BtnShowMore />
    </>
  );
};

export default HomePage;
