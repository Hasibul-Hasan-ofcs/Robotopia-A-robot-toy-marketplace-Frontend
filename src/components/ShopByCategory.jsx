import React, { useEffect, useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../css/shopByCategory.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

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
        <h1 className="bebas-font py-5 fw-bold text-center text-white">
          View By Category
        </h1>

        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab style={{ transform: "skewX(12px)" }}>
              <span className="theme-color fw-bold">Gundam</span>{" "}
            </Tab>
            <Tab style={{ transform: "skewX(12px)" }}>
              <span className="theme-color fw-bold">Transformers</span>{" "}
            </Tab>
            <Tab style={{ transform: "skewX(12px)" }}>
              <span className="theme-color fw-bold">Macross</span>{" "}
            </Tab>
          </TabList>
          <TabPanel>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
              style={{
                paddingBottom: "40px",
                "--swiper-pagination-bullet-inactive-color": "#fff",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              <div className="rounded d-flex flex-wrap gap-4 justify-content-center">
                {subCategoryData &&
                  subCategoryData.map((el, indx) => {
                    return (
                      el.type === "g" && (
                        <SwiperSlide key={indx}>
                          <div className="card m-4 p-3 d-flex gap-2 flex-column">
                            <img
                              src={el.img}
                              className="h-250 rounded shp-img"
                            />
                            <h4 className="teko-font pt-3 text-white">
                              {el.name}
                            </h4>
                            <h3 className="teko-font theme-color">
                              {el.price}$
                            </h3>
                            <p>rating: {el.rating}</p>

                            <HashLink
                              to={`/toy-details/${el._id}#top`}
                              className="theme-button rounded text-center py-2"
                            >
                              View Details
                            </HashLink>
                          </div>
                        </SwiperSlide>
                      )
                    );
                  })}
              </div>
            </Swiper>
          </TabPanel>
          <TabPanel>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
              style={{ paddingBottom: "40px" }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              <div className="rounded d-flex flex-wrap gap-4 justify-content-center">
                {subCategoryData &&
                  subCategoryData.map((el, indx) => {
                    return (
                      el.type === "t" && (
                        <SwiperSlide key={indx}>
                          <div className="card m-4 p-3 d-flex gap-2 flex-column">
                            <img
                              src={el.img}
                              className="h-250 rounded shp-img"
                            />
                            <h4 className="teko-font pt-3 text-white">
                              {el.name}
                            </h4>
                            <h3 className="teko-font theme-color">
                              {el.price}$
                            </h3>
                            <p>rating: {el.rating}</p>
                            <HashLink
                              to={`/toy-details/${el._id}#top`}
                              className="theme-button rounded text-center py-2"
                            >
                              View Details
                            </HashLink>
                          </div>
                        </SwiperSlide>
                      )
                    );
                  })}
              </div>
            </Swiper>
          </TabPanel>
          <TabPanel>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
              style={{ paddingBottom: "40px" }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              <div className="rounded d-flex flex-wrap gap-4 justify-content-center">
                {subCategoryData &&
                  subCategoryData.map((el, indx) => {
                    return (
                      el.type === "m" && (
                        <SwiperSlide key={indx}>
                          <div className="card m-4 p-3 d-flex gap-2 flex-column">
                            <img
                              src={el.img}
                              className="h-250 rounded shp-img"
                            />
                            <h4 className="teko-font pt-3 text-white">
                              {el.name}
                            </h4>
                            <h3 className="teko-font theme-color">
                              {el.price}$
                            </h3>
                            <p>rating: {el.rating}</p>
                            <HashLink
                              to={`/toy-details/${el._id}#top`}
                              className="theme-button rounded text-center py-2"
                            >
                              View Details
                            </HashLink>
                          </div>
                        </SwiperSlide>
                      )
                    );
                  })}
              </div>
            </Swiper>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
