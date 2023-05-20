import React, { useContext } from "react";
import "../css/header.css";
import "../css/glassmorphism.css";
import Robo1 from "../assets/images/robo_1.jpg";
import Robo2 from "../assets/images/robo_2.jpg";
import Robo5 from "../assets/images/robo_5.jpg";
import Robo6 from "../assets/images/robo_6.jpg";
import { HashLink } from "react-router-hash-link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPlay } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const Header = () => {
  const settings = {
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
    <div className="dark_bg01">
      <div className="container mx-auto d-flex flex-column">
        <div className="carousal-div h-450">
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
        <div className="d-flex flex-column align-items-center">
          <div className="started-div rounded-5 position-relative mb-4 py-1 px-2 d-flex align-items-center justify-content-center">
            <span className="teko-font text-white">
              Let's Get
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Started
            </span>
            <HashLink to="#gallery">
              <button className="gs-button rounded-circle d-flex align-items-center justify-content-center">
                <FaPlay></FaPlay>
              </button>
            </HashLink>
          </div>
          <Marquee style={{ overflowY: "hidden" }} className="mb-5">
            <h1 className="teko-font text-white text-center">
              Travel the utopia with <span className="theme-color">Gundam</span>{" "}
              and <span className="theme-color">Transformers</span> toys. Step
              into a world where imagination and technology collide, and get
              ready to explore an extraordinary universe filled with robotic
              wonders. From robot pets to intricate humanoid robots, our shelves
              are stocked with a wide variety of robotic companions to suit
              every taste and preference.
            </h1>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Header;
