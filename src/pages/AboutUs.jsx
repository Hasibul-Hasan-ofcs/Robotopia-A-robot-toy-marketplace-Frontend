import React from "react";
import BannerCommon from "../components/BannerCommon";
import dynamicAppTitle from "../js/dynamicAppTitle";

const AboutUs = () => {
  dynamicAppTitle("About Us");
  return (
    <div>
      <BannerCommon pageName="About Us"></BannerCommon>
      <div className="container py-5">
        <h3 className="teko-font text-center">
          Welcome to our action-packed world of collectible figures! At our
          marketplace, we bring together enthusiasts and collectors of all ages
          who share a passion for{" "}
          <span className="theme-color">Transformers</span> ,{" "}
          <span className="theme-color">Gundam</span> ,{" "}
          <span className="theme-color">Macross</span> , and other thrilling
          action figure franchises. With an extensive selection of meticulously
          crafted toys and accessories, we strive to provide a haven where fans
          can explore, connect, and enhance their collections. Our mission is to
          offer a seamless experience, offering a diverse range of figures from
          classic favorites to the latest releases, ensuring that every
          collector finds something extraordinary. Whether you're seeking iconic
          Autobots, powerful Mobile Suits, or stunning Valkyries, our
          marketplace is your gateway to the ultimate action figure adventure.
          Join us and embark on a journey where imagination meets reality, and
          the excitement of these legendary franchises comes to life in the palm
          of your hand. Get ready to unleash your inner hero and discover a
          world of endless possibilities with our unparalleled selection of
          action figures!
        </h3>
      </div>
    </div>
  );
};

export default AboutUs;
