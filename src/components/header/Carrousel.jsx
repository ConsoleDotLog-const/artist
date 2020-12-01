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
<<<<<<< HEAD
   
      <Slider {...settings}
      >
        <div class="carrousel__img carrousel__img--1"></div>
        <div class="carrousel__img carrousel__img--2"></div>
        <div class="carrousel__img carrousel__img--3"></div>
=======
      <Slider {...settings}>
        <div class="carrousel__img carrousel__img--1">image 1</div>
        <div class="carrousel__img carrousel__img--2">image 2</div>
        <div class="carrousel__img carrousel__img--3">image 3</div>
>>>>>>> 1d19484190c31c1c28272033b97b08bfb8a811fa
      </Slider>
    </div>
  );
};

export default Carrousel;
<<<<<<< HEAD


=======
>>>>>>> 1d19484190c31c1c28272033b97b08bfb8a811fa
