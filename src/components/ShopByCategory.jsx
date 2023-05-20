import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../css/shopByCategory.css";

import { subCategoryData } from "../js/jsonLoader";
import { Link } from "react-router-dom";

const ShopByCategory = () => {
  const [tabIndex, setTabIndex] = useState(0);

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
          <TabPanel className="dark_bg01 rounded d-flex flex-wrap gap-4 justify-content-center">
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
                    <Link className="theme-button rounded text-center">
                      View Details
                    </Link>
                  </div>
                )
              );
            })}
          </TabPanel>
          <TabPanel className="dark_bg01 rounded d-flex flex-wrap gap-4 justify-content-center">
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
                    <Link className="theme-button rounded text-center">
                      View Details
                    </Link>
                  </div>
                )
              );
            })}
          </TabPanel>
          <TabPanel className="dark_bg01 rounded d-flex flex-wrap gap-4 justify-content-center">
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
                    <Link className="theme-button rounded text-center">
                      View Details
                    </Link>
                  </div>
                )
              );
            })}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
