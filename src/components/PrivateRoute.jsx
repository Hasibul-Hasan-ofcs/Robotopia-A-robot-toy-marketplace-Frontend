import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  console.log(location);

  if (loading)
    return (
      <div className="py-5 d-flex justify-content-center">
        <Spinner animation="grow" />
      </div>
    );

  if (user) return children;

  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
