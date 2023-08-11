import React, { useEffect, useState } from "react";
import "../css/glassmorphism.css";
import "../css/gallery.css";
import LazyLoad from "react-lazy-load";
import Robo1 from "../assets/images/robo_1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import BoxReveal from "./BoxReveal";

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
    <div className="py-5" id="gallery">
      <div className="container mx-auto">
        <h2 className="orbitron-font py-5 fw-bold text-center text-lg-start">
          <span className="theme-color">Robo</span> Gallery
        </h2>
        <div className="row">
          {galleryImgs &&
            galleryImgs.map((el, indx) => (
              <div className="col-12 col-md-6 col-lg-3 p-0" key={indx}>
                <BoxReveal>
                  <div
                  // data-aos="fade-up"
                  // data-aos-duration={`${(indx + 1) * 1000}`}
                  >
                    <div className="m-2 rounded-4 shadow">
                      <LazyLoad>
                        <img src={el.img} className="rounded-4 gl-img w-100" />
                      </LazyLoad>
                    </div>
                  </div>
                </BoxReveal>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
