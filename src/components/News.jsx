import React from "react";
import "../css/news.css";
import { FaPlay } from "react-icons/fa";
import ROB from "../assets/images/rise_of_beasts_1.jpg";
import TLN from "../assets/images/the_last_knight.jpg";

const News = () => {
  return (
    <div className="container mx-auto rounded-3 shadow my-5 newsDiv d-flex flex-lg-row flex-column">
      <div className="w-full w p-5">
        <p className="d-flex justify-content-between fw-bold">
          <span className="d-flex gap-3 theme-color">
            <span>NEW</span>
            <span>ROBOTS</span>
            <span>ACTION</span>
          </span>
          <span className="text-black-50">AUGUST 11, 2023</span>
        </p>
        <h2 className="teko-font">Transformers The Last Knight</h2>
        <p className="text-dark py-5">
          Transformers The Last Knight is a 2017 American science fiction action
          film directed by Michael Bay. It is the fifth installment in the
          live-action Transformers film series, and the sequel to Transformers:
          Age of Extinction (2014). The film stars Mark Wahlberg, Josh Duhamel,
          Anthony Hopkins, Laura Haddock, Stanley Tucci, Isabela Moner, Jerrod
          Carmichael, John Turturro, and Gemma Chan. In the film, Cade Yeager
          and Bumblebee must team up with an English lord and an Oxford
          professor to stop a Cybertronian goddess from destroying Earth. <br />{" "}
          <br />
          The film begins in 484 AD, when King Arthur and his knights are
          fighting a losing battle against the Saxons. Merlin calls upon the
          help of the Knights of Iacon, a group of Transformers who have been
          hiding on Earth. The Knights give Merlin a staff that will allow him
          to control Dragonstorm, a giant dragon-like Transformer. With
          Dragonstorm's help, King Arthur is victorious.
        </p>
        <div className="d-flex gap-2 align-items-center">
          <button
            className="gs-button2 rounded-circle d-flex align-items-center justify-content-center"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <FaPlay></FaPlay>
          </button>{" "}
          <span>View Trailer</span>
        </div>
      </div>
      <div className="w-full d-flex align-items-center justify-content-center">
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
              ></button>
            </div>
            <div
              className="modal-body d-flex justify-content-center align-items-center"
              style={{ height: "70vh" }}
            >
              <iframe
                style={{ width: "100%", height: "100%" }}
                src="https://www.youtube.com/embed/OGKzyC4KLFg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
