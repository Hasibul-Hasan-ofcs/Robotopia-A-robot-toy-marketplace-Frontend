import React from "react";
import { Link } from "react-router-dom";
import dynamicAppTitle from "../js/dynamicAppTitle";
import PNF404 from "../assets/svg/404_1.svg";

const ErrorPage = () => {
  dynamicAppTitle("Page not found");

  return (
    <div className="container min-vh-100 flex-column d-flex align-items-center justify-content-center py-5">
      <div className="container-fluid d-flex align-items-center justify-content-center flex-column">
        <img className="img-fluid w-50" src={PNF404} />
        {/* <h1 className="theme-color py-5">404! Page Not Found.</h1> */}
      </div>
      <Link className="button-box" to="/">
        <button className="theme-button rounded border-0 px-3 py-2 fw-bold">
          Go Back to Home page
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
