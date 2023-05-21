import React from "react";
import dynamicAppTitle from "../js/dynamicAppTitle";

const AddToy = () => {
  dynamicAppTitle("Add a Toy");
  return (
    <div>
      <BannerCommon pageName="Toy Details"></BannerCommon>

      <div className="container mx-auto py-5">
        <div className="details-box rounded-4 border p-3 mb-4">
          <div className="glass-box-toy-details d-flex align-items-center justify-content-center flex-column py-5"></div>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
