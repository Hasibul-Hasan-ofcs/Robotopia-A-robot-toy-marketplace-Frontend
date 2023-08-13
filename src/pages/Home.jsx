import React, { useEffect, useState } from "react";
import dynamicAppTitle from "../js/dynamicAppTitle.js";
import Header from "../components/Header.jsx";
import Gallery from "../components/Gallery.jsx";
import ShopByCategory from "../components/ShopByCategory.jsx";
import NewsLetter from "../components/NewsLetter.jsx";
import ActionFigureContext from "../components/ActionFigureContext.jsx";
import News from "../components/News.jsx";
import IntroModal from "../components/IntroModal.jsx";
import HeaderRv from "../components/HeaderRv.jsx";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider.jsx";
import InStock from "../components/InStock.jsx";

const Home = () => {
  const { introLoader, setIntroLoader } = useContext(AuthContext);

  // const [viewModal, setViewModal] = useState(true);
  // const [viewModal, setViewModal] = useState(false);
  dynamicAppTitle("Home");

  useEffect(() => {
    setTimeout(() => {
      // setViewModal(false);
      setIntroLoader(false);
    }, 5000);
  }, []);

  return (
    <div className="dark_bg01">
      <div className={`${!introLoader && "modal_control"} modal_box`}>
        <IntroModal></IntroModal>
      </div>
      {/* <Header></Header> */}
      <HeaderRv></HeaderRv>
      {/* <Sponsors></Sponsors> */}
      <Gallery></Gallery>
      <ActionFigureContext></ActionFigureContext>
      <InStock></InStock>
      <News></News>
      <ShopByCategory></ShopByCategory>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
