import React, { useContext } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProviders";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-50 mx-auto">
        <Spinner animation="grow" />;
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;


