import React from "react";
import "../css/glassmorphism.css";
import Transformers from "../assets/images/transformers-logo.png";
import Gundam from "../assets/images/gundam-logo.png";
import Macross from "../assets/images/macross-logo.png";

const transformers =
  "The Transformers franchise had its humble beginnings as a captivating line of transforming toy robots, born from the creative ingenuity of the Japanese company Takara in 1984. Almost immediately, these innovative toys captured the imagination of youngsters and enthusiasts alike, owing to their remarkable ability to shift between robotic and vehicular forms. The phenomenon didn't remain confined to Japan for long; Hasbro recognized the immense potential and introduced the Transformers to the United States, where it swiftly evolved into a cultural phenomenon and an unprecedented commercial success. Concurrently, an animated television series titled \"The Transformers\" was meticulously crafted to not only showcase the fascinating toys but also to extend the brand's influence into the hearts and minds of a global audience. This synergistic approach of intertwining cutting-edge toys with captivating storytelling laid the foundation for the enduring legacy that the Transformers franchise enjoys today.";

const gundam =
  'The iconic Gundam franchise, born from the visionary minds of Yoshiyuki Tomino and Hajime Yatate, emerged onto the global stage in 1979 with its groundbreaking animated series, "Mobile Suit Gundam." This seminal creation not only redefined the mecha genre but also left an indelible mark on the realms of anime and science fiction. With its captivating narrative, intricate world-building, and exquisitely designed mobile suits, Gundam sparked a revolution that continues to resonate across generations. As the franchise expanded over the years, it evolved into a cultural phenomenon that transcends borders, fostering a passionate community of fans who are drawn to its compelling stories, complex characters, and themes that explore the human cost of war and the boundless possibilities of technology. Through its enduring legacy, Gundam stands as a testament to the power of creativity to shape the collective imagination and inspire countless creators in their own artistic pursuits.';

const macross =
  "The original Macross series stands as a pioneering masterpiece that unveiled a captivating narrative of humanity's valiant stand against the formidable Zentradi, an enigmatic race of colossal humanoid extraterrestrials. Seamlessly fusing elements of intense mecha warfare, the mesmerizing power of music, and the complexities of a poignant love triangle, the show chronicles the indomitable spirit of protagonist Hikaru Ichijo. Amidst the chaos of interstellar conflict, the story weaves a magnetic connection between Hikaru, the enchanting idol Lynn Minmay, and the steadfast Misa Hayase. This multifaceted tapestry of emotions and battles not only gripped the hearts of viewers across Japan, but it also transcended geographical boundaries to capture the adoration of a global audience, solidifying its position as a cultural phenomenon that continues to resonate profoundly.";

const ActionFigureContext = () => {
  return (
    <div className="py-5 my-5 dark_bg01 " id="gallery">
      <div className="container py-5 mx-auto">
        <h2 className="orbitron-font py-5 fw-bold text-center text-white">
          <span className="theme-color">Action Figure</span> Contexts
        </h2>

        <div className="">
          <div className="Card rounded-4 p-3 mb-4">
            <img
              src={Transformers}
              style={{
                height: "120px",
                float: "left",
                marginRight: "20px",
                marginBottom: "20px",
              }}
            />
            <h1 className="teko-font theme-color fw-bolder">TransFormers</h1>
            <p className="pt-3 pb-5 text-justify">
              <span className="teko-font fw-bold fs-20">{transformers}</span>
              &nbsp;{}
            </p>

            <img
              src={Gundam}
              style={{
                height: "120px",
                float: "left",
                marginRight: "20px",
                marginBottom: "20px",
              }}
            />
            <h1 className="teko-font theme-color fw-bolder">Gundam</h1>

            <p className="pt-3 pb-5 text-justify">
              <span className="teko-font fw-bold  fs-20">{gundam}</span>
              &nbsp;{}
            </p>

            <img
              src={Macross}
              style={{
                height: "120px",
                float: "left",
                marginRight: "20px",
                marginBottom: "20px",
              }}
            />
            <h1 className="teko-font theme-color fw-bolder">Macross</h1>

            <p className="pt-3 pb-5 text-justify">
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
