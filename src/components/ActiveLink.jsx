import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, classes, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `active_route ${classes}` : `${classes}`
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
