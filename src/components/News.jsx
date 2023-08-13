import React, { useRef } from "react";
import "../css/news.css";
import { FaPlay } from "react-icons/fa";
import TLN from "../assets/images/the_last_knight.jpg";

const News = () => {
  const modalRef = useRef(null);
  const iframeRef = useRef(null);

  const handleOpenModal = () => {
    const iframe = iframeRef.current;
    iframe.src = "https://www.youtube.com/embed/OGKzyC4KLFg";
  };

  const handleCloseModal = () => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      iframe.src = "";
    }
  };

  return (
    <div className="py-5">
      <div className="container mx-auto rounded-3 shadow my-5 newsDiv d-flex flex-lg-row flex-column">
        <div className="leftnewsbox p-lg-5 px-2 pt-5">
          <p className="d-flex flex-column flex-lg-row justify-content-between fw-bold">
            <span className="d-flex gap-3 theme-color">
              <span>NEW</span>
              <span>ROBOTS</span>
              <span>ACTION</span>
            </span>
            <span className="text-white-50">AUGUST 11, 2023</span>
          </p>
          <span className="theme-bg rounded-5 text-white px-2">
            Context Review
          </span>
          <h2 className="teko-font pt-3 text-white">
            Transformers The Last Knight
          </h2>
          <p className="text-white py-3 fw-medium">
            Transformers The Last Knight is a 2017 American science fiction
            action film directed by Michael Bay. It is the fifth installment in
            the live-action Transformers film series, and the sequel to
            Transformers: Age of Extinction (2014). The film stars Mark
            Wahlberg, Josh Duhamel, Anthony Hopkins, Laura Haddock, Stanley
            Tucci, Isabela Moner, Jerrod Carmichael, John Turturro, and Gemma
            Chan. In the film, Cade Yeager and Bumblebee must team up with an
            English lord and an Oxford professor to stop a Cybertronian goddess
            from destroying Earth. <br /> <br />
            The film begins in 484 AD, when King Arthur and his knights are
            fighting a losing battle against the Saxons. Merlin calls upon the
            help of the Knights of Iacon, a group of Transformers who have been
            hiding on Earth. The Knights give Merlin a staff that will allow him
            to control Dragonstorm, a giant dragon-like Transformer. With
            Dragonstorm's help, King Arthur is victorious...
          </p>
          <div className="d-flex gap-2 align-items-center">
            <button
              className="gs-button2 rounded-circle d-flex align-items-center justify-content-center"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={handleOpenModal}
            >
              <FaPlay></FaPlay>
            </button>{" "}
            <span className="theme-color fw-bold">View Trailer</span>
          </div>
        </div>
        <div className="newsimgbox w-full d-flex align-items-center justify-content-center p-lg-5 px-2 py-5">
          <img src={TLN} alt="transformer image" className="rounded-3 w-100" />
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
          ref={modalRef}
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="modal-title fs-5 teko-font"
                  id="staticBackdropLabel"
                >
                  Transformers The Last Knight
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div
                className="modal-body d-flex justify-content-center align-items-center"
                style={{ height: "70vh", padding: 0 }}
              >
                <iframe
                  ref={iframeRef}
                  style={{ width: "100%", height: "100%" }}
                  src="https://www.youtube.com/embed/OGKzyC4KLFg"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
