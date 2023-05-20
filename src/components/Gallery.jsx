import React, { useEffect } from "react";
import "../css/glassmorphism.css";
import "../css/gallery.css";
import LazyLoad from "react-lazy-load";
import Robo1 from "../assets/images/robo_1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

// remove it
import { galleryImgs } from "../js/jsonLoader";

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="py-5" id="gallery">
      <div className="container mx-auto">
        <h2 className="orbitron-font py-5 fw-bold text-center">
          <span className="theme-color">Robo</span> Gallery
        </h2>
        <div className="row">
          {galleryImgs.map((el, indx) => (
            <div className="col-12 col-md-6 col-lg-3 p-0" key={indx}>
              <div
                data-aos="fade-up"
                data-aos-duration={`${(indx + 1) * 1000}`}
              >
                <div className="card p-4 rounded-0">
                  <LazyLoad>
                    <img src={el.img} className="gl-img w-100" />
                  </LazyLoad>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
