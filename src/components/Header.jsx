import React, { useContext } from "react";
import Robo1 from "../assets/images/robo_1.jpg";
import Robo2 from "../assets/images/robo_2.png";
import Robo3 from "../assets/images/robo_3.png";
import Robo4 from "../assets/images/robo_4.png";
import { HashLink } from "react-router-hash-link";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div className={`${theme ? "bg-dark-secondary" : "main_header_bg"}`}>
      <div className="container px-0 py-5 mx-auto d-flex flex-column-reverse flex-lg-row">
        <div className="container py-5 width-50 pe-0 pe-lg-5 d-flex flex-column align-items-center align-items-lg-start justify-content-center gap-4">
          <h1
            className={`text-white orbitron-font header_text pe-0 pe-lg-5 d-flex flex-column align-items-center align-items-lg-start`}
          >
            <span className="text-1-header">Transform Your</span>
            <span className="text-1-header">Playtime</span>
            <span className="text-2-header">with Our Enchanting</span>
            <span className="theme-color text-3-header pacifico-font">
              Toy Robots!
            </span>
          </h1>
          <p className="gray-01 fs-14 text-center text-lg-start header-info-text">
            Get ready for a world of endless adventures and storytelling
            possibilities with our incredible toy robots. These little
            companions come to life with vibrant personalities, interactive
            features, and engaging narratives. From epic space explorations to
            thrilling rescue missions, your child's imagination will soar as
            they create unique stories and scenarios alongside their robot
            friends. Let the magic of play inspire your child's creativity and
            storytelling abilities with our enchanting toy robots.
          </p>
          <div className="button-box ">
            <HashLink to="/#featured-jobs-id">
              <button className="theme-button rounded border-0 px-3 py-2 fw-bold header-start-btn">
                Get Started
              </button>
            </HashLink>
          </div>
        </div>
        <div className="container px-2 px-lg-0 width-50">
          <div className="container-fluid position-relative height-520">
            <div className="img-box img-fluid position-absolute top-0 end-0">
              <img
                src={Robo2}
                // className="height-520 header-img rounded-4"
                className="height-520 rounded-4"
                alt="back to job"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
