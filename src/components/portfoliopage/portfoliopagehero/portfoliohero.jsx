import React from "react";
import "./portfoliohero.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Portfoliopagehero = () => {
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
        <div className="portfolio_heromain_one">
          <h2>
            <i> "If it scares you, it might be a good thing to try."</i>
          </h2>
        </div>
      </div>
      <div>
        <div className="portfolio_heromain_two"></div>
      </div>
      <div>
        <div className="portfolio_heromain_three"></div>
      </div>
    </Slider>
  );
};
export default Portfoliopagehero;
