import React from "react";
import "../css/glassmorphism.css";

const BannerCommon = ({ pageName }) => {
  return (
    <div className="banner-common d-flex justify-content-center align-items-center py-5">
      <h2
        className="glass-box text-white orbitron-font fw-bold px-4 py-3 my-2"
        style={{ fontSize: "40px" }}
      >
        {pageName}
      </h2>
    </div>
  );
};

export default BannerCommon;
