import React from "react";

import Slider from "react-slick";

const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
  };

  return (
    <div className="carrousel">
      <Slider {...settings}>
        <div class="carrousel__img carrousel__img--1">image 1</div>
        <div class="carrousel__img carrousel__img--2">image 2</div>
        <div class="carrousel__img carrousel__img--3">image 3</div>
      </Slider>
    </div>
  );
};

export default Carrousel;
