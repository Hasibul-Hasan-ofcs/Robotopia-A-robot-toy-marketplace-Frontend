import React, { useContext, useEffect, useRef, useState } from "react";
import "./../css/navigationBar.css";
import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";
import { AuthContext } from "../providers/AuthProvider";
import MainLogo from "../assets/images/main_logo.png";
import { FaBars, FaCaretDown, FaSignOutAlt } from "react-icons/fa";
import { maskedEmail } from "../js/maskedEmail";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const NavigationBar = () => {
  const { user, logout } = useContext(AuthContext);

  const dropDownRef = useRef(null);
  const profileRef = useRef(null);

  const [displayValue, setDisplayValue] = useState("d-none");
  const [classStateDD, setClassStateDD] = useState(
    `dropdown shadow bg-white rounded overflow-hidden d-flex flex-column d-none`
  );

  const profileButtonClickHandler = (e) => {
    setDisplayValue(displayValue === "d-none" ? "d-block" : "d-none");
    setClassStateDD(
      `dropdown shadow bg-white rounded overflow-hidden d-flex flex-column ${displayValue}`
    );
  };

  useEffect(() => {
    setDisplayValue(displayValue === "d-none" ? "d-block" : "d-none");
  }, []);

  const logoutHandler = () => {
    logout();
  };

  return (
    <div className={`container-fluid mx-0 header-portion`} id="top">
      <nav className="container navbar navbar-expand-lg py-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h4 className="fw-bold orbitron-font text-white d-flex align-items-center gap-2">
              <img src={MainLogo} className="logo-img" />
              <span>Robotopia</span>
            </h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`fs-hamburger color-white`}>
              <FaBars />
            </span>
          </button>
          <div
            className="collapse navbar-collapse justify-content"
            id="navbarNavAltMarkup"
          >
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-end gap-lg-4 w-100">
              <div className="fs-14 links d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center gap-4 py-5 py-lg-0">
                <ActiveLink to="/" classes={` text-decoration-none text-white`}>
                  Home
                </ActiveLink>
                <ActiveLink
                  to="/all-toys"
                  classes={` text-decoration-none text-white`}
                >
                  Alltoys
                </ActiveLink>

                {user && (
                  <ActiveLink
                    to="/my-toys"
                    classes={` text-decoration-none text-white`}
                  >
                    Mytoys
                  </ActiveLink>
                )}
                {user && (
                  <ActiveLink
                    to="/add-toy"
                    classes={` text-decoration-none text-white`}
                  >
                    Addtoy
                  </ActiveLink>
                )}

                <ActiveLink
                  to="/blogs"
                  classes={` text-decoration-none text-white`}
                >
                  Blogs
                </ActiveLink>
                <ActiveLink
                  to="/about-us"
                  classes={` text-decoration-none text-white`}
                >
                  About
                </ActiveLink>
              </div>

              <div className="button-box d-flex gap-3 align-items-center">
                {user ? (
                  <>
                    <button
                      className="profile_button border-0 bg-transparent"
                      onClick={profileButtonClickHandler}
                      id="app-title"
                      ref={profileRef}
                    >
                      <img
                        src={user.photoURL}
                        className="user-image-nav rounded-circle"
                      />
                      <span className="color-white">
                        <FaCaretDown />
                      </span>
                    </button>

                    <ReactTooltip
                      anchorId="app-title"
                      place="left"
                      className="bg-white text-primary"
                      content={user.displayName}
                    />

                    <div className={classStateDD} ref={dropDownRef}>
                      <div className="d-flex flex-column gap-2 pt-3">
                        <span className="border-bottom pb-3 px-3">
                          {user.displayName}
                        </span>
                      </div>

                      <button
                        className="py-2 px-4 dropdown-button d-flex justify-content-between align-items-center bg-transparent border-0 border-bottom"
                        onClick={logoutHandler}
                      >
                        <span className="theme-color">
                          <FaSignOutAlt />
                        </span>
                        Sign Out
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <button className="theme-button login-button text-white rounded text-dark border-0 px-3 py-2 fw-bold">
                        <span>Sign In</span>
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
