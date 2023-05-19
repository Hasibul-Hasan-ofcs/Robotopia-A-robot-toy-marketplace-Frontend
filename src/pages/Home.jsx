import React from "react";
import Footer from "../components/Footer.jsx";
import dynamicAppTitle from "../js/dynamicAppTitle.js";

const Home = () => {
  dynamicAppTitle("Home");

  return <div>inside Home</div>;
};

export default Home;
