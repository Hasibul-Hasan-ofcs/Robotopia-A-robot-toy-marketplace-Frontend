import React from "react";
import Footer from "../components/Footer.jsx";
import dynamicAppTitle from "../js/dynamicAppTitle.js";
import Header from "../components/Header.jsx";

const Home = () => {
  dynamicAppTitle("Home");

  return (
    <div>
      <Header></Header>
    </div>
  );
};

export default Home;
