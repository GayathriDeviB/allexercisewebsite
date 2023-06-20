import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./certhero.css";
const Certhero = () => {
  const Settings = {
    dots: true,
    infinite: true,
    speed: 50,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
  };
  return (
    <Slider {...Settings}>
      <div>
        <div className="backgroundmain_one">
          <h1>GRADUATED IN MATHEMATICS</h1>
        </div>
      </div>
      <div>
        <div className="backgroundmain_two"></div>
      </div>
    </Slider>
  );
};
export default Certhero;
