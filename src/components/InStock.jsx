import React from "react";
import "../css/inStock.css";
import "../css/glassmorphism.css";
import Robo1 from "../assets/images/robo_1.jpg";
import Robo2 from "../assets/images/robo_2.jpg";
import Robo5 from "../assets/images/robo_5.jpg";
import Robo6 from "../assets/images/robo_6.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InStock = () => {
  const settings = {
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: false,
        },
      },
      {
        breakpoint: 1024, // Tablet breakpoint
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="pt-1">
      <div className="container">
        <h1 className="bebas-font text-center py-5 text-white text-uppercase">
          Open Stock Gallery
        </h1>

        <div className="instock-div overflow-hidden">
          <Slider {...settings}>
            <div className="glass-box m-4 p-3 h-350">
              <img src={Robo1} className="h-100 w-100 rounded" />
            </div>
            <div className="glass-box m-4 p-3 h-350">
              <img src={Robo2} className="h-100 w-100 rounded" />
            </div>
            <div className="glass-box m-4 p-3 h-350">
              <img src={Robo5} className="h-100 w-100 rounded" />
            </div>
            <div className="glass-box m-4 p-3 h-350">
              <img src={Robo6} className="h-100 w-100 rounded" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default InStock;
