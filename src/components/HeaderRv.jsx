import React from "react";
import "../css/headerRv.css";
import Bee from "../assets/images/bee.png";
import Robo1 from "../assets/images/robo_1.png";
import { MouseParallax } from "react-just-parallax";
import Ztext from "react-ztext";

const HeaderRv = () => {
  return (
    <div className="min-vh-100 w-100 dark_bg01 position-relative overflow-hidden">
      <div className="bg-neon1"></div>
      <div className="bg-neon2"></div>
      <div className="bg-neon3"></div>
      <div className="container mx-auto position-relative d-flex align-items-center justify-content-center">
        <MouseParallax strength={0.03}>
          {/* <Ztext
            depth="3rem"
            direction="both"
            event="pointer"
            eventRotation="30deg"
            eventDirection="default"
            fade={false}
            layers={20}
            perspective="500px"
            style={{
              fontSize: "4rem",
            }}
          > */}
          <h1
            className="bebas-font header-big-text text-center"
            data-text="WELCOME"
          >
            WELCOME
          </h1>
          {/* </Ztext> */}
        </MouseParallax>

        <MouseParallax strength={0.01} isAbsolutelyPositioned>
          <div className="header-left">
            <img src={Robo1} alt="robot img" className="img-area1" />
          </div>
        </MouseParallax>

        <MouseParallax strength={0.01} isAbsolutelyPositioned>
          <div className="header-right">
            <img src={Bee} alt="bee car" className="img-area2" />
          </div>
        </MouseParallax>
      </div>
    </div>
  );
};

export default HeaderRv;
