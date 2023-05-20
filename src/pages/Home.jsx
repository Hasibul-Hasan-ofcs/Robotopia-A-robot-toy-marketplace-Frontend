import React from "react";
import Footer from "../components/Footer.jsx";
import dynamicAppTitle from "../js/dynamicAppTitle.js";
import Header from "../components/Header.jsx";
import Gallery from "../components/Gallery.jsx";

const Home = () => {
  dynamicAppTitle("Home");

  return (
    <div>
      <Header></Header>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
