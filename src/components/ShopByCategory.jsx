import React, { useEffect, useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../css/shopByCategory.css";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const ShopByCategory = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [subCategoryData, setSubCategoryData] = useState(null);

  useEffect(() => {
    fetch("https://robotopia-server.vercel.app/alltoys")
      .then((result) => result.json())
      .then((data) => {
        setSubCategoryData(data);
      })
      .catch((err) => console.error(err));
  }, []);

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
            {subCategoryData &&
              subCategoryData.map((el, indx) => {
                return (
                  el.type === "g" && (
                    <div
                      className="card m-4 p-3 d-flex gap-2 flex-column"
                      key={indx}
                    >
                      <img src={el.img} className="h-250 rounded shp-img" />
                      <h4 className="teko-font text-white pt-3">{el.name}</h4>
                      <h3 className="teko-font theme-color">{el.price}$</h3>
                      <p>rating: {el.rating}</p>

                      <HashLink
                        to={`/toy-details/${el._id}#top`}
                        className="theme-button rounded text-center"
                      >
                        View Details
                      </HashLink>
                    </div>
                  )
                );
              })}
          </TabPanel>
          <TabPanel className="dark_bg01 rounded d-flex flex-wrap gap-4 justify-content-center">
            {subCategoryData &&
              subCategoryData.map((el, indx) => {
                return (
                  el.type === "t" && (
                    <div
                      className="card m-4 p-3 d-flex gap-2 flex-column"
                      key={indx}
                    >
                      <img src={el.img} className="h-250 rounded shp-img" />
                      <h4 className="teko-font text-white pt-3">{el.name}</h4>
                      <h3 className="teko-font theme-color">{el.price}$</h3>
                      <p>rating: {el.rating}</p>
                      <HashLink
                        to={`/toy-details/${el._id}#top`}
                        className="theme-button rounded text-center"
                      >
                        View Details
                      </HashLink>
                    </div>
                  )
                );
              })}
          </TabPanel>
          <TabPanel className="dark_bg01 rounded d-flex flex-wrap gap-4 justify-content-center">
            {subCategoryData &&
              subCategoryData.map((el, indx) => {
                return (
                  el.type === "m" && (
                    <div
                      className="card m-4 p-3 d-flex gap-2 flex-column"
                      key={indx}
                    >
                      <img src={el.img} className="h-250 rounded shp-img" />
                      <h4 className="teko-font text-white pt-3">{el.name}</h4>
                      <h3 className="teko-font theme-color">{el.price}$</h3>
                      <p>rating: {el.rating}</p>
                      <HashLink
                        to={`/toy-details/${el._id}#top`}
                        className="theme-button rounded text-center"
                      >
                        View Details
                      </HashLink>
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
