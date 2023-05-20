import React, { useEffect } from "react";
import "../css/glassmorphism.css";
import "../css/gallery.css";
import LazyLoad from "react-lazy-load";
import Robo1 from "../assets/images/robo_1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  const galleryImgs = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fbee.jpg?alt=media&token=89481235-5644-4465-bb35-78511b2e06c4",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fdecepticon01.jpg?alt=media&token=f784ddb0-6052-469d-a9e8-6ab7c77a53d9",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fdecepticon02.jpg?alt=media&token=69983e52-16af-49a7-9e0f-e05202cac24e",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fgundam01.jpg?alt=media&token=b21a2fb8-e440-4f1e-a0c6-ffcd6073011d",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fgundam02.jpg?alt=media&token=d0939ccb-4c82-4de1-b4c3-9f2e9ea606d1",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fgundam03.jpg?alt=media&token=80367824-a631-4d49-a9a2-536e3ced14b5",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Frobot01.jpg?alt=media&token=12296aaa-1c67-4795-b5c8-e4d3f840d686",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Frobot02.jpg?alt=media&token=2d264178-8eab-480b-a18b-628baf6c4b01",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Frobot03.jpg?alt=media&token=dbb3eb9c-898e-480e-a015-d9cd765da77e",
    },
  ];

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
          {/*aos check*/}
          {galleryImgs.map((el, indx) => (
            <div className="col-12 col-md-6 col-lg-4 p-0" key={indx}>
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
