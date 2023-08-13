import React, { useEffect, useState } from "react";
import "../css/glassmorphism.css";
import "../css/gallery.css";
import LazyLoad from "react-lazy-load";
import Robo1 from "../assets/images/robo_1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import BoxReveal from "./BoxReveal";
import GVertical from "../assets/images/gundam_vertical.jpg";
import GVertical2 from "../assets/images/gundam_vertical2.jpg";
import Gposter from "../assets/images/gundam2.jpg";
import BBCar from "../assets/images/bumble_bee_car.jpg";
import Gp from "../assets/images/gundam_poster_1.jpg";
import Ct from "../assets/images/cybertron_2.jpg";

const Gallery = () => {
  const [galleryImgs, setGalleryImgs] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  useEffect(() => {
    fetch("https://robotopia-server.vercel.app/gallery")
      .then((result) => result.json())
      .then((data) => setGalleryImgs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="py-5 dark_bg01" id="gallery">
      <div className="container py-5">
        <h1 className="bebas-font text-center py-5 text-white">GALLERY</h1>
        <p className="d-flex flex-wrap gap-5 pb-5 justify-content-center">
          <span>UTOPIA</span>
          <span>GUNDAM</span>
          <span>TRANSFORMERS</span>
          <span>MACROS</span>
          <span>TRANSFORMING CARS</span>
        </p>
        <div className="img-container-grid">
          <div className="left-grid">
            <div className="smallsquare img-wrapper-box">
              <img src={Gposter} className="image-grid-controller" />
            </div>
            <div className="smallsquare img-wrapper-box">
              <img src={BBCar} className="image-grid-controller" />
            </div>
            {/* <div className="smallsquare img-wrapper-box">
              <img src={Gp} className="image-grid-controller" />
            </div> */}

            <div className="bigsquare img-wrapper-box">
              <img src={Ct} className="image-grid-controller" />
            </div>
          </div>
          <div className="v_vertical img-wrapper-box">
            <img src={GVertical2} className="image-grid-controller" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
