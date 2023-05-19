import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";
import { AuthContext } from "../providers/AuthProvider";
import "./../css/navigationBar.css";
import {
  FaAffiliatetheme,
  FaBars,
  FaBookmark,
  FaCaretDown,
  FaSignOutAlt,
  FaUserCog,
} from "react-icons/fa";

import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { maskEmail } from "../js/maskEmail";

const NavigationBar = () => {
  const { user, logout, theme, setTheme } = useContext(AuthContext);

  // console.log(user);

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

    console.log(displayValue);
  };

  useEffect(() => {
    setDisplayValue(displayValue === "d-none" ? "d-block" : "d-none");
  }, []);

  const logoutHandler = () => {
    logout();
  };

  const toggleThemeHandler = () => {
    if (theme) {
      console.log("light");
      setTheme(false);
    } else {
      console.log("dark");
      setTheme(true);
    }
  };

  return (
    <div
      className={`container-fluid mx-0 ${
        theme ? "bg-dark-secondary" : "bg_cream_orange_01"
      }`}
      id="top"
    >
      <nav className="container navbar navbar-expand-lg py-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h4
              className={`fw-bolder pacifico-font ${
                theme ? "text-white" : "text-dark"
              }`}
            >
              Robotopia<span className="theme-color">.</span>
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
            <span
              className={`fs-hamburger ${theme ? "color-white" : "gray-02"}`}
            >
              <FaBars />
            </span>
          </button>
          <div
            className="collapse navbar-collapse justify-content"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav d-flex align-items-center justify-content-lg-between w-100">
              <div className="balancer"></div>

              <div className="links d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center gap-4 py-5 py-lg-0">
                <ActiveLink
                  to="/"
                  classes={`fs-14 text-decoration-none  ${
                    theme ? "text-white" : "gray-01"
                  }`}
                >
                  Home
                </ActiveLink>
                <ActiveLink
                  to="/blogs"
                  classes={`fs-14 text-decoration-none  ${
                    theme ? "text-white" : "gray-01"
                  }`}
                >
                  Blogs
                </ActiveLink>
                <ActiveLink
                  to="/aboutus"
                  classes={`fs-14 text-decoration-none  ${
                    theme ? "text-white" : "gray-01"
                  }`}
                >
                  About Us
                </ActiveLink>
              </div>

              <div className="button-box d-flex gap-3 align-items-center">
                {user ? (
                  <>
                    {/* <span className="">{user.displayName}</span> */}
                    <button
                      className="profile_button border-0 bg-transparent"
                      onClick={profileButtonClickHandler}
                      id="app-title"
                      ref={profileRef}
                    >
                      <img
                        src={user.photoURL}
                        className="user-image-nav rounded-circle theme-border2"
                      />
                      <span className={`${theme ? "color-white" : ""}`}>
                        <FaCaretDown />
                      </span>
                    </button>

                    <ReactTooltip
                      anchorId="app-title"
                      place="left"
                      content={user.displayName}
                    />

                    {/* dropdown */}
                    <div className={classStateDD} ref={dropDownRef}>
                      <div className="d-flex flex-column gap-2 pt-3">
                        <span className="d-flex justify-content-start px-3">
                          <img
                            src={user.photoURL}
                            className="user-image-nav rounded-circle theme-border2"
                          />
                        </span>
                        <span className="border-bottom pb-3 px-3">
                          {user.email
                            ? maskEmail(user.email)
                            : user.displayName}
                        </span>
                      </div>

                      {/* <button className="py-2 px-4 dropdown-button d-flex justify-content-between align-items-center bg-transparent border-0 border-bottom">
                        <span className="theme-color">
                          <FaUserCog />
                        </span>
                        View Profile
                      </button>
                      <button className="py-2 px-4 dropdown-button d-flex justify-content-between align-items-center bg-transparent border-0 border-bottom">
                        <span className="theme-color">
                          <FaBookmark />
                        </span>
                        Favorites
                      </button> */}
                      <button className="py-2 px-4 dropdown-button d-flex justify-content-between align-items-center bg-transparent border-0 border-bottom">
                        <span className="theme-color">
                          <FaAffiliatetheme />
                        </span>

                        <div
                          className="form-check form-switch mx-0 px-0"
                          id="theme-id"
                        >
                          <input
                            className="form-check-input mx-0 px-0"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckChecked"
                            onChange={toggleThemeHandler}
                            // unchecked
                          />
                        </div>
                        <ReactTooltip
                          anchorId="theme-id"
                          place="left"
                          content={theme ? "Theme [dark]" : "Theme [light]"}
                        />
                      </button>
                      {/*  */}
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
                      <button className="theme-button white-mbg text-dark rounded border-0 px-3 py-2 fw-bold">
                        Login
                      </button>
                    </Link>
                    <Link to="/signup">
                      <button className="theme-button rounded border-0 px-3 py-2 fw-bold">
                        Sign Up
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
