import React from "react";
import BannerCommon from "../components/BannerCommon";
import dynamicAppTitle from "../js/dynamicAppTitle";
import { useLoaderData } from "react-router-dom";
import "../css/toyDetails.css";

const ToyDetails = () => {
  dynamicAppTitle("Toy Details");

  const loadedData = useLoaderData();

  // console.log(loadedData);
  return (
    <div>
      <BannerCommon pageName="Toy Details"></BannerCommon>

      <div className="container mx-auto py-5">
        {loadedData && (
          <div className="details-box rounded-4 border p-3 mb-4">
            <div className="glass-box-toy-details d-flex align-items-center justify-content-center flex-column py-5">
              <h1 className="teko-font my-3">{loadedData.name}</h1>
              <img
                src={loadedData.img}
                className="h-250 rounded shp-img my-3"
              />
              <h3 className="teko-font">
                <b>seller name:</b> {loadedData.sellerName}
              </h3>
              <h3 className="teko-font">
                <b>seller nmail</b> {loadedData.sellerEmail}
              </h3>
              <h1 className="teko-font theme-color">{loadedData.price}$</h1>
              <h3 className="teko-font">
                <b>rating:</b> {loadedData.rating}
              </h3>
              <h3 className="teko-font">
                <b>available quantity:</b> {loadedData.availableQuantity}
              </h3>
              <h3 className="teko-font text-center">
                <b>detail description:</b> {loadedData.detailDescription}
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToyDetails;
