import React from "react";
import BannerCommon from "../components/BannerCommon";
import dynamicAppTitle from "../js/dynamicAppTitle";

const ToyDetails = () => {
  dynamicAppTitle("Toy Details");
  return (
    <div>
      <BannerCommon pageName="Toy Details"></BannerCommon>
    </div>
  );
};

export default ToyDetails;
