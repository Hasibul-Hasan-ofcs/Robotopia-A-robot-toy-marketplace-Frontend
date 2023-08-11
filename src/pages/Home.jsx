import React from "react";
import dynamicAppTitle from "../js/dynamicAppTitle.js";
import Header from "../components/Header.jsx";
import Gallery from "../components/Gallery.jsx";
import ShopByCategory from "../components/ShopByCategory.jsx";
import NewsLetter from "../components/NewsLetter.jsx";
import ActionFigureContext from "../components/ActionFigureContext.jsx";
import News from "../components/News.jsx";

const Home = () => {
  dynamicAppTitle("Home");

  return (
    <div>
      <Header></Header>
      {/* <Sponsors></Sponsors> */}
      <Gallery></Gallery>
      <News></News>
      <ActionFigureContext></ActionFigureContext>
      <ShopByCategory></ShopByCategory>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
