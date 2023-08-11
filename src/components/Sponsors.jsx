import React from "react";
import Marquee from "react-fast-marquee";
import amazon from "../assets/sponsors/amazon.png";
import figma from "../assets/sponsors/figma.png";
import google from "../assets/sponsors/google.png";
import spotify from "../assets/sponsors/spotify.png";
import telerama from "../assets/sponsors/telerama.png";

const Sponsors = () => {
  return (
    <div className="container mx-auto py-5">
      <Marquee style={{ overflow: "hidden" }} className="mb-5" speed={15}>
        <div className="d-flex gap-5per py-5">
          <img src={amazon} className="grayscale-1" height="40" />
          <img src={figma} className="grayscale-1" height="40" />
          <img src={google} className="grayscale-1" height="40" />
          <img src={spotify} className="grayscale-1" height="40" />
          <img src={telerama} className="grayscale-1" height="40" />
        </div>
      </Marquee>
    </div>
  );
};

export default Sponsors;
