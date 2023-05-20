import React, { useContext } from "react";
import "../css/footer.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaInstagram, FaSkype, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import MainLogo from "../assets/images/main_logo.png";
import "../css/glassmorphism.css";

const Footer = () => {
  const { user } = useContext(AuthContext);

  const loggedInHandler = () => {
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
    <div className="dark_bg01">
      <div className="container mx-auto py-5 ">
        <Link className="navbar-brand d-block pb-3 pt-5" to="/">
          <h2 className="fw-bold orbitron-font text-white d-flex align-items-center gap-2">
            <img src={MainLogo} className="logo-img2" />
            <span>Robotopia</span>
          </h2>
        </Link>
        <div className="row mx-0 py-5">
          <div className="col-12 col-md-6 col-lg-2 px-2 px-lg-0 pb-5 pb-lg-0">
            <p className="text-white">About</p>
            <div className="links d-flex flex-column gap-3">
              <a href="" className=" fs-14 text-decoration-none">
                Mission and Values
              </a>
              <a href="" className=" fs-14 text-decoration-none">
                Our Story
              </a>
              <a href="" className=" fs-14 text-decoration-none">
                Team
              </a>
              {user ? (
                <HashLink
                  to="/#top"
                  className=" fs-14 text-decoration-none"
                  onClick={loggedInHandler}
                >
                  Login
                </HashLink>
              ) : (
                <HashLink
                  to="/login#top"
                  className=" fs-14 text-decoration-none"
                >
                  Login
                </HashLink>
              )}
              {user ? (
                <HashLink
                  to="/#top"
                  className=" fs-14 text-decoration-none"
                  onClick={loggedInHandler}
                >
                  Sign Up
                </HashLink>
              ) : (
                <HashLink
                  to="/signup#top"
                  className=" fs-14 text-decoration-none"
                >
                  Sign Up
                </HashLink>
              )}
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-2 px-2 px-lg-0 pb-5 pb-lg-0">
            <p className="text-white">Contact Us</p>
            <div className="links d-flex flex-column gap-3">
              <a href="" className=" fs-14 text-decoration-none">
                Customer Support
              </a>
              <a href="" className=" fs-14 text-decoration-none">
                Sales Inquiries
              </a>
              <a href="" className=" fs-14 text-decoration-none">
                Technical Assistance
              </a>
              <a href="" className=" fs-14 text-decoration-none">
                Physical Store Locations
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-2 px-2 px-lg-0 pb-5 pb-lg-0">
            <p className="text-white">FAQs</p>
            <div className="links d-flex flex-column gap-3">
              <a href="" className=" fs-14 text-decoration-none">
                Shipping and Delivery
              </a>
              <a href="" className=" fs-14 text-decoration-none">
                Returns and Refunds
              </a>
              <a href="" className=" fs-14 text-decoration-none">
                Product Warranty
              </a>
              <a href="" className=" fs-14 text-decoration-none">
                Assembly and Setup
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-2 px-2 px-lg-0 pb-5 pb-lg-0">
            <p className="text-white">Product Categories</p>
            <div className="links d-flex flex-column gap-3">
              <a href="" className=" fs-14 text-decoration-none">
                Educational Robots
              </a>
              <a href="" className=" fs-14 text-decoration-none">
                Programmable Robots
              </a>
              <a href="" className=" fs-14 text-decoration-none">
                Remote-Controlled Robots
              </a>
              <a href="" className=" fs-14 text-decoration-none">
                Interactive Robots
              </a>
            </div>
          </div>

          <div className="col-12 col-lg-4 px-2 px-lg-0 pb-5 pb-lg-0 d-flex flex-column justify-content-between gap-4">
            <div className="h-100 glass-box p-3">
              <p className="pb-0 mb-0 text-end">+1 (555) 123-4567</p>
              <p className="pb-3 text-end">info@robotopia.com</p>
              <p className="pb-0 mb-0 text-end">5935</p>
              <p className="pb-0 mb-0 text-end">Main Street Cityville, USA</p>
            </div>
            <div>
              <div className="links d-flex flex-wrap gap-3">
                <a
                  href="https://www.facebook.com"
                  className="footer_link text-dark rounded"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.twitter.com"
                  className="footer_link text-dark rounded"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.youtube.com"
                  className="footer_link text-dark rounded"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://dribbble.com/"
                  className="footer_link text-dark rounded"
                >
                  <FaDribbble />
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="footer_link text-dark rounded"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.skype.com/"
                  className="footer_link text-dark rounded"
                >
                  <FaSkype />
                </a>
                <a
                  href="https://www.whatsapp.com/"
                  className="footer_link text-dark rounded"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-lg-row gap-3 gap-lg-0 justify-content-between px-2 px-lg-0 pt-4 pb-1">
          <p className="fs-14">
            @2023 <span className="fw-bolder">Robotopia</span>. All Rights
            Reserved
          </p>
          <p className="fs-14 d-flex gap-3 flex-wrap">
            <a className="">Terms and conditions</a>
            <a className="">Privacy policy</a>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Footer;
