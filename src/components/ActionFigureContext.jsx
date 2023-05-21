import React from "react";
import "../css/glassmorphism.css";
import Transformers from "../assets/images/transformers-logo.png";
import Gundam from "../assets/images/gundam-logo.png";
import Macross from "../assets/images/macross-logo.png";

const ActionFigureContext = () => {
  const transformers =
    'The Transformers franchise originated as a line of transforming toy robots created by the Japanese company Takara in 1984. It quickly gained popularity and was brought to the United States by Hasbro, where it became a massive success. Alongside the toy line, an animated television series titled "The Transformers" was developed to promote the toys and expand the brand\'s reach.';

  const gundam =
    'Gundam is a popular Japanese media franchise that originated with an animated television series called "Mobile Suit Gundam," which aired in 1979. Created by Yoshiyuki Tomino and Hajime Yatate, Gundam revolutionized the mecha genre and has since become one of the most influential and enduring franchises in anime and science fiction.';

  const macross =
    "The original Macross series introduced the world to the story of Earth's struggle against a race of giant humanoid aliens called the Zentradi. It combined mecha combat, music, and a love triangle between the protagonist Hikaru Ichijo, Lynn Minmay, and Misa Hayase. The series became a cultural phenomenon in Japan and gained popularity worldwide.";

  return (
    <div className="py-5" id="gallery">
      <div className="container mx-auto">
        <h2 className="orbitron-font py-5 fw-bold text-center">
          <span className="theme-color">Action Figure</span> Contexts
        </h2>

        <div className="">
          <div className="Card dark_bg01 rounded-4 border p-3 mb-4">
            <div className="glass-box d-flex align-items-center justify-content-between flex-wrap gap-3 p-3">
              <img src={Transformers} style={{ height: "120px" }} />
              <h1 className="teko-font theme-color fw-bolder">TransFormers</h1>
            </div>
            <br />
            <p className="p-3">
              <span className="teko-font fw-bold  fs-20">{transformers}</span>
              &nbsp;{}
            </p>
            <div className="glass-box d-flex align-items-center justify-content-between flex-wrap gap-3 p-3">
              <img src={Gundam} style={{ height: "120px" }} />
              <h1 className="teko-font theme-color fw-bolder">Gundam</h1>
            </div>
            <br />
            <p className="p-3">
              <span className="teko-font fw-bold  fs-20">{gundam}</span>
              &nbsp;{}
            </p>
            <div className="glass-box d-flex align-items-center justify-content-between flex-wrap gap-3 p-3">
              <img src={Macross} style={{ height: "120px" }} />
              <h1 className="teko-font theme-color fw-bolder">Macross</h1>
            </div>
            <br />
            <p className="p-3">
              <span className="teko-font fw-bold  fs-20">{macross}</span>
              &nbsp;{}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionFigureContext;
