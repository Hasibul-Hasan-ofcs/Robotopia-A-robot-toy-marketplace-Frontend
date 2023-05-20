import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../css/shopByCategory.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { subCategoryData } from "../js/jsonLoader";

const ShopByCategory = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    arrows: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: false,
        },
      },
      {
        breakpoint: 1024, // Tablet breakpoint
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="py-5" id="gallery">
      <div className="container mx-auto">
        <h2 className="orbitron-font py-5 fw-bold text-center">
          Shop By <span className="theme-color">Category</span>
        </h2>

        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Gundam </Tab>
            <Tab>Transformers </Tab>
            <Tab>Macross </Tab>
          </TabList>
          <TabPanel className="dark_bg01">
            <Slider {...settings}>
              {subCategoryData.map((el, indx) => {
                return (
                  el.type === "g" && (
                    <div
                      className="card m-4 p-3 d-flex gap-2 flex-column"
                      key={indx}
                    >
                      <img src={el.img} className="h-250 rounded shp-img" />
                      <h4 className="text-white pt-3">{el.name}</h4>
                      <h2 className="theme-color">{el.price}$</h2>
                      <p>rating: {el.rating}</p>
                      <div className="theme-button rounded text-center">
                        View Details
                      </div>
                    </div>
                  )
                );
              })}
            </Slider>
          </TabPanel>
          <TabPanel className="dark_bg01">
            <Slider {...settings}>
              {subCategoryData.map((el, indx) => {
                return (
                  el.type === "t" && (
                    <div
                      className="card m-4 p-3 d-flex gap-2 flex-column"
                      key={indx}
                    >
                      <img src={el.img} className="h-250 rounded shp-img" />
                      <h4 className="text-white pt-3">{el.name}</h4>
                      <h2 className="theme-color">{el.price}$</h2>
                      <p>rating: {el.rating}</p>
                      <div className="theme-button rounded text-center">
                        View Details
                      </div>
                    </div>
                  )
                );
              })}
            </Slider>
          </TabPanel>
          <TabPanel className="dark_bg01">
            <Slider {...settings}>
              {subCategoryData.map((el, indx) => {
                return (
                  el.type === "m" && (
                    <div
                      className="card m-4 p-3 d-flex gap-2 flex-column"
                      key={indx}
                    >
                      <img src={el.img} className="h-250 rounded shp-img" />
                      <h4 className="text-white pt-3">{el.name}</h4>
                      <h2 className="theme-color">{el.price}$</h2>
                      <p>rating: {el.rating}</p>
                      <div className="theme-button rounded text-center">
                        View Details
                      </div>
                    </div>
                  )
                );
              })}
            </Slider>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
