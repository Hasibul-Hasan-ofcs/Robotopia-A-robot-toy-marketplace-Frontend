import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
// import { AuthContext } from "../providers/AuthProvider";
import { HashLink } from "react-router-hash-link";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../providers/AuthProvider";

const Footer = () => {
  const { user } = useContext(AuthContext);

  const loggedInHandler = (e) => {
    toast.warning("You are already logged in", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div className="bg-dark-01">
      <div className="container py-5 mx-auto">
        <div className="row mx-0 py-5">
          <div className="col-12 col-lg-6 px-2 px-lg-0 pb-5 pb-lg-0">
            <Link className="navbar-brand d-block pb-3" to="/">
              <h4 className="fw-bolder text-white pacifico-font">
                Robotopia<span className="theme-color">.</span>
              </h4>
            </Link>
            <p className="gray-02 fs-14 pe-2 pe-lg-5 me-0 me-lg-5 pb-3">
              Discover the Excellence of Japanese Culinary Craftsmanship; Where
              Every Dish is a Work of Art. Let the Masterful Techniques and
              Unmatched Attention to Detail Take You on a Gastronomical Journey.
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-2 px-2 px-lg-0 pb-5 pb-lg-0">
            <p className="text-white">About</p>
            <div className="links d-flex flex-column gap-3">
              <a href="" className="gray-02 fs-14 text-decoration-none">
                About Us
              </a>
              <a href="" className="gray-02 fs-14 text-decoration-none">
                Latest News
              </a>
              {user ? (
                <HashLink
                  to="/#top"
                  className="gray-02 fs-14 text-decoration-none"
                  onClick={loggedInHandler}
                >
                  Login
                </HashLink>
              ) : (
                <HashLink
                  to="/login#top"
                  className="gray-02 fs-14 text-decoration-none"
                >
                  Login
                </HashLink>
              )}
              {user ? (
                <HashLink
                  to="/#top"
                  className="gray-02 fs-14 text-decoration-none"
                  onClick={loggedInHandler}
                >
                  Sign Up
                </HashLink>
              ) : (
                <HashLink
                  to="/signup#top"
                  className="gray-02 fs-14 text-decoration-none"
                >
                  Sign Up
                </HashLink>
              )}
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-2 px-2 px-lg-0 pb-5 pb-lg-0">
            <p className="text-white">Product</p>
            <div className="links d-flex flex-column gap-3">
              <a href="" className="gray-02 fs-14 text-decoration-none">
                Chefs
              </a>
              <a href="" className="gray-02 fs-14 text-decoration-none">
                Plans & Pricing
              </a>
              <a href="" className="gray-02 fs-14 text-decoration-none">
                Customers
              </a>
              <a href="" className="gray-02 fs-14 text-decoration-none">
                Recipes
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-2 px-2 px-lg-0 pb-5 pb-lg-0">
            <p className="text-white">Connections</p>
            <div className="links d-flex flex-column gap-3">
              <a
                href="https://www.facebook.com"
                className="gray-02 fs-14 text-decoration-none d-flex align-items-center gap-2"
              >
                <FaFacebook /> Facebook
              </a>
              <a
                href="https://www.twitter.com"
                className="gray-02 fs-14 text-decoration-none d-flex align-items-center gap-2"
              >
                <FaTwitter /> Twitter
              </a>
              <a
                href="https://www.youtube.com"
                className="gray-02 fs-14 text-decoration-none d-flex align-items-center gap-2"
              >
                <FaYoutube /> Youtube
              </a>
              <a
                href="https://dribbble.com/"
                className="gray-02 fs-14 text-decoration-none d-flex align-items-center gap-2"
              >
                <FaDribbble /> Dribble
              </a>
            </div>
          </div>
        </div>
        <hr className="gray-02" />
        <div className="d-flex flex-column flex-lg-row gap-3 gap-lg-0 justify-content-center px-2 px-lg-0 pt-4 pb-5">
          <p className="gray-02 fs-14 text-decoration-none">
            @2023 <span className="fw-bolder">Robotopia</span>. All Rights
            Reserved
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Footer;
